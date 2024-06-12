<template>
  <div class="app-select">
    <div class="app-select-label" v-if="label">{{ label }}</div>
    <v-select
      style="width: 100%"
      :id="'select' + randomId"
      :options="optionsSelect"
      :multiple="multiple"
      @open="onOpen"
      @close="onClose"
      :label="optionLabel"
      @search="(query: string) => changeSearch(query)"
      v-model="selected"
    >
      <template #list-footer>
        <li v-show="more" ref="loadRef" class="loader">Carregando...</li>
      </template>
      <template v-slot:no-options="{ search, searching }">
        <template v-if="searching">
          Sem resultados para "{{ search }}".
        </template>
        <template v-if="!searching"> Sem resultados. </template>
      </template>
    </v-select>
    <input
      type="text"
      hidden
      :name="name"
      v-model="selectedParsed"
      :required="required"
    />
  </div>
</template>
<script lang="ts" setup>
import { defineProps, nextTick, onMounted, onUnmounted, ref } from "vue";
import { http } from "@/utils/http";

const randomId = Math.random();
const selected = ref("");
const selectedParsed = ref("");
const optionsSelect: any = ref([]);
const search = ref("");
const page = ref(1);
const more = ref(true);
const loadRef = ref();
const observer = ref<IntersectionObserver | null>(null);
let intervalParser: any;

const props = defineProps<{
  name?: string;
  label?: string;
  url?: string;
  multiple?: boolean;
  options?: any[];
  optionLabel?: string;
  value?: string;
  required?: boolean;
}>();

onMounted(() => {
  if (props.value) {
    selected.value = props.value;
  }

  selected.value;

  if (props.options) {
    optionsSelect.value = props.options;
  } else {
    observer.value = new IntersectionObserver(infiniteScroll);
  }

  intervalParser = setInterval(
    () =>
      (selectedParsed.value =
        typeof selected.value === "object"
          ? JSON.stringify(selected.value)
          : selected.value),
    1
  );
});

onUnmounted(() => {
  clearInterval(intervalParser);
});

const onOpen = async () => {
  if (!props.options) {
    await load(true);
    await nextTick();
    observer.value?.observe(loadRef.value);
  }
};

const onClose = () => {
  if (!props.options) {
    observer.value?.disconnect();
  }
};

const infiniteScroll = async (entries: IntersectionObserverEntry[]) => {
  const { isIntersecting, target } = entries[0];
  if (isIntersecting) {
    load();
  }
};

const load = async (refresh = false) => {
  if (refresh) {
    more.value = true;
    page.value = 1;
    optionsSelect.value = [];
  }

  try {
    const response = await http.get(props.url ?? "", {
      params: {
        rpp: 15,
        page: page.value,
        search: search.value,
      },
    });
    const { data } = response;
    more.value = data.more;
    page.value = page.value + 1;
    optionsSelect.value = [
      ...optionsSelect.value,
      ...data.list.filter((option: any) =>
        props.optionLabel ? option[props.optionLabel] : option
      ),
    ];
  } catch (error) {
    console.log(error);
  }
};

const changeSearch = (value: string) => {
  if (props.options) {
    return props.options.filter((option) =>
      props.optionLabel
        ? option[props.optionLabel].toLowerCase() === value.toLowerCase()
        : option.toLowerCase() === value.toLowerCase()
    );
  } else {
    search.value = value;

    load(true);
  }
};
</script>
<style scoped lang="scss">
.app-select {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;

  &-label {
    font-size: 16px;
    font-weight: 300;
  }
}
</style>

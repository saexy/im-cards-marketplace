<template>
  <div class="app-input">
    <div class="app-input-label" v-if="label">{{ label }}</div>
    <input
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      :required="required"
    />
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

defineProps<{
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
}>();
</script>
<style scoped lang="scss">
.app-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;

  &-label {
    font-size: 16px;
    font-weight: 300;
  }

  input {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid rgb(141, 141, 141);
    background-color: transparent;
  }
}
</style>

<template>
  <div class="app-my-cards">
    <div class="app-my-cards-header">
      <div class="app-my-cards-header-title">Minhas Cartas</div>
      <app-button @click="handleOpenAddCardsModal">
        Adicionar carta(s)
      </app-button>
    </div>
    <div class="app-my-cards-body">
      <div class="app-my-cards-body-card" v-for="card in data" :key="card.id">
        <img :src="card.imageUrl" alt="Imagem da carta" />
        <p>{{ card.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from "vue";
import { http } from "@/utils/http";
import { Card } from "@/types/card";
import store from "@/store";
import AppMyCardsAddView from "./AppMyCardsAddView.vue";

const data: Ref<Card[]> = ref([]);

onMounted(async () => {
  const response = await http.get("/me/cards");
  data.value = response.data;
});

const handleOpenAddCardsModal = () => {
  store.dispatch("openModal", {
    title: "Adicionar Carta",
    size: "md",
    component: AppMyCardsAddView,
  });
};
</script>

<style lang="scss" scoped>
.app-my-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-title {
      font-size: 24px;
    }
  }

  &-body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    &-card {
      max-width: 100%;
      width: 300px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      text-align: center;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      align-items: center;

      img {
        width: 80%;
      }

      p {
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
}
</style>

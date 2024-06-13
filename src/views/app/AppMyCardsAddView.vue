<template>
  <form @submit.prevent="handleAddCard" class="app-my-cards-add">
    <app-select
      url="/cards"
      label="Cartas:"
      name="cards"
      optionLabel="name"
      :multiple="true"
      optionKey="id"
      :required="true"
    ></app-select>
    <app-button type="submit" color="secondary">Adicionar</app-button>
  </form>
</template>

<script lang="ts" setup>
import { convertEventToForm } from "@/utils/form";
import { http } from "@/utils/http";

const handleAddCard = async (event: any) => {
  const form = convertEventToForm(event);

  if (form.cards) {
    const cardIds = JSON.parse(form.cards).map((card: any) => card.id);
    const s = cardIds.length > 1 ? "s" : "";

    try {
      await http.post("/me/cards", { cardIds });
      alert(`Carta${s} adicionada${s} com sucesso.`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.app-my-cards-add {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>

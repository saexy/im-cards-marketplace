<template>
  <form @submit.prevent="handleAddTrade" class="app-trade-add">
    <app-select
      url="/cards"
      label="Carta ofertada:"
      name="card-offered"
      optionLabel="name"
      optionKey="id"
      :required="true"
    ></app-select>
    <app-select
      url="/cards"
      label="Carta recebida:"
      name="card-received"
      optionLabel="name"
      optionKey="id"
      :required="true"
    ></app-select>
    <app-button type="submit" color="secondary">Criar</app-button>
  </form>
</template>

<script lang="ts" setup>
import { convertEventToForm } from "@/utils/form";
import { http } from "@/utils/http";

const handleAddTrade = async (event: any) => {
  const form = convertEventToForm(event);

  try {
    const cardOffered = JSON.parse(form["card-offered"]);
    const cardReceived = JSON.parse(form["card-received"]);

    if (cardOffered && cardReceived) {
      try {
        await http.post("/trades", {
          cards: [
            {
              cardId: cardOffered.id,
              type: "OFFERING",
            },
            {
              cardId: cardReceived.id,
              type: "RECEIVING",
            },
          ],
        });
        alert(`Solicitação de troca criada com sucesso.`);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.app-trade-add {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>

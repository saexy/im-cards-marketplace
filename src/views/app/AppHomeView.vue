<template>
  <div class="app-home">
    <div class="app-home-header">
      <div class="app-home-header-title">Página Inicial</div>
      <app-button @click="handleOpenAddTradeModal"> Criar troca </app-button>
    </div>
    <div class="app-home-body">
      <div class="app-home-body-center" v-if="list.length <= 0 && !loading">
        Nenhum item encontrado.
      </div>
      <div class="app-home-body-center" v-if="loading">
        <app-loading></app-loading>
      </div>
      <div class="app-home-body-trade" v-for="trade in list" :key="trade.id">
        <div class="app-home-body-trade-cards">
          <div
            class="app-home-body-trade-cards-card"
            v-for="tradeCard in trade.tradeCards"
            :key="tradeCard.id"
          >
            <img :src="tradeCard.card.imageUrl" alt="Imagem da Carta" />
            <div>
              Carta
              {{ tradeCard.type === "OFFERING" ? "Ofertada" : "Recebida" }}
            </div>
            <div>{{ tradeCard.card.name }}</div>
          </div>
        </div>
        <div class="app-home-body-trade-infos">
          <div>Criador: {{ trade.user.name }}</div>
          <div>Data de criação: {{ dateFormat(trade.createdAt) }}</div>
          <app-button
            v-if="store.state.user?.id === trade.userId"
            color="secondary"
            @click="handleDeleteTrade(trade.id)"
          >
            Excluir troca
          </app-button>
        </div>
      </div>
    </div>
    <div class="app-home-paginate">
      <app-button @click="previewPage" :disabled="page === 1 || loading">
        <i class="bi bi-arrow-left-short"></i>
      </app-button>
      <div>Página {{ page }}</div>
      <app-button @click="nextPage" :disabled="!more || loading">
        <i class="bi bi-arrow-right-short"></i>
      </app-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, Ref } from "vue";
import { http } from "@/utils/http";
import store from "@/store";
import AppTradeAdd from "./AppTradeAdd.vue";
import { dateFormat } from "@/utils/date";

const list: Ref<any[]> = ref([]);
const page: Ref<number> = ref(1);
const more: Ref<boolean> = ref(false);
const loading: Ref<boolean> = ref(true);

onMounted(() => load());

const load = async () => {
  loading.value = true;

  try {
    const response = await http.get("/trades", {
      params: { rpp: 10, page: page.value },
    });
    const { data } = response;
    more.value = data.more;
    list.value = data.list;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const nextPage = () => {
  if (more.value && !loading.value) {
    page.value++;

    load();
  }
};

const previewPage = () => {
  if (page.value > 1 && !loading.value) {
    page.value--;

    load();
  }
};

const handleOpenAddTradeModal = () => {
  store.dispatch("openModal", {
    title: "Criar troca",
    size: "md",
    component: AppTradeAdd,
  });
};

const handleDeleteTrade = async (id: string) => {
  try {
    await http.delete(`/trades/${id}`);
    alert("Solicitação de troca excluida com sucesso");
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped>
.app-home {
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

    &-center {
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
    }

    &-trade {
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

      &-cards {
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-card {
          width: 48%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 15px;
          font-size: 14px;

          img {
            width: 100%;
          }
        }
      }

      &-infos {
        font-size: 18px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        gap: 15px;
      }
    }
  }

  &-paginate {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
    font-size: 16px;
  }
}
</style>

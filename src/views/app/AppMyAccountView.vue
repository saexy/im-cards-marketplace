<template>
  <div class="app-my-account">
    <div class="app-my-account-header">Minha conta</div>
    <div class="app-my-account-container">
      <div class="app-my-account-container-body">
        <app-input
          :disabled="true"
          :value="store.state.user.id"
          label="ID:"
        ></app-input>
        <app-input
          :disabled="true"
          :value="store.state.user.name"
          label="Nome:"
        ></app-input>
        <app-input
          :disabled="true"
          :value="store.state.user.email"
          label="Email:"
        ></app-input>
        <app-button @click="handleLogout">Sair</app-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from "@/store";

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};
</script>

<style lang="scss" setup>
.app-my-account {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &-header {
    font-size: 24px;
  }

  &-container {
    width: 100%;
    display: flex;
    justify-content: center;

    &-body {
      width: 100%;
      max-width: 500px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
}
</style>

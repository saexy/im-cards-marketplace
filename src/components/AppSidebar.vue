<template>
  <div class="app-sidebar">
    <router-link
      class="app-sidebar-link"
      to="/app/home"
      :class="{ active: router.currentRoute.value.fullPath === '/app/home' }"
    >
      <i class="bi bi-house-fill"></i>
      Página inicial
    </router-link>
    <router-link
      class="app-sidebar-link"
      to="/app/my-cards"
      :class="{
        active: router.currentRoute.value.fullPath === '/app/my-cards',
      }"
    >
      <i class="bi bi-person-vcard-fill"></i>
      Minhas cartas
    </router-link>
    <router-link
      class="app-sidebar-link"
      to="/app/my-account"
      :class="{
        active: router.currentRoute.value.fullPath === '/app/my-account',
      }"
    >
      <i class="bi bi-person-fill"></i>
      Minha conta
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import router from "@/router";
</script>

<style scoped lang="scss">
.app-sidebar {
  width: 250px;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);

  &-link {
    width: 100%;
    display: flex;
    align-items: center;
    border-left: 4px solid transparent;
    background-color: transparent;
    padding: 10px;
    gap: 10px;
    cursor: pointer;
    color: var(--light);
    transition: all 0.3s ease-in-out;

    &.active,
    &:hover {
      border-left: 4px solid var(--primary);
      background-color: #ff723546;
    }
  }
}
</style>

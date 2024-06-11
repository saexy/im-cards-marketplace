<template>
  <div class="app">
    <AppHeader></AppHeader>
    <div class="app-container">
      <AppSidebar></AppSidebar>
      <div class="app-container-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  display: flex;
  flex-direction: column;

  &-container {
    width: 100%;
    display: flex;

    &-content {
      flex: 1;
      display: flex;
      padding: 25px;
      flex-direction: column;
      overflow: auto;
    }
  }
}
</style>

<template>
  <app-modal></app-modal>
  <div class="app">
    <app-header></app-header>
    <div class="app-container">
      <app-sidebar></app-sidebar>
      <div class="app-container-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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

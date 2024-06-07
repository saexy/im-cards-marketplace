<template>
  <div class="app-auth">
    <div class="app-auth-section">
      <img src="/logo.png" alt="Logo InMeta Software" />
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped lang="scss">
.app-auth {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &-section {
    max-width: 600px;
    width: 100%;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
      width: 15%;
    }
  }
}
</style>

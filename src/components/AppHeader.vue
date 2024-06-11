<template>
  <div class="app-header">
    <div class="app-header-brand">
      <img src="/logo.png" alt="Logo InMeta" />
      Cards Marketplace
    </div>
    <div class="app-header-actions">
      <router-link to="/app/account" class="app-header-actions-link">
        <i class="bi bi-person-fill"></i>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  width: 100%;
  height: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);

  &-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: var(--dark);

    img {
      width: 30px;
    }
  }

  &-actions {
    display: flex;
    align-items: center;
    gap: 10px;

    &-link {
      cursor: pointer;
      color: var(--dark);
      font-size: 24px;
    }
  }
}
</style>

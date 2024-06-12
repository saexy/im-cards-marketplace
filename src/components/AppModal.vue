<template>
  <div class="app-modal" :class="{ show: store.state.modal.show }">
    <div class="app-modal-container" :class="[store.state.modal.size]">
      <div class="app-modal-container-header">
        <div class="app-modal-container-header-title">
          {{ store.state.modal.title }}
        </div>
        <div class="app-modal-container-header-close" @click="handleCloseModal">
          <i class="bi bi-x"></i>
        </div>
      </div>
      <div class="app-modal-container-content">
        <component
          :is="store.state.modal.component"
          v-if="store.state.modal.component"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import store from "@/store";

const handleCloseModal = async () => {
  store.dispatch("closeModal");
};
</script>

<style lang="scss" scoped>
.app-modal {
  width: 100%;
  height: 100vh;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.212);
  z-index: -1;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  overflow-x: hidden;
  overflow-y: auto;

  &.show {
    z-index: 1000;
    opacity: 1;
  }

  &-container {
    background-color: var(--light);
    padding: 30px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    color: var(--dark);
    width: 100%;
    gap: 30px;

    &.sm {
      max-width: 400px;
    }

    &.md {
      max-width: 600px;
    }

    &.lg {
      max-width: 800px;
    }

    &-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-title {
        font-size: 26px;
        font-weight: 600;
        line-height: 1;
      }

      &-close {
        font-size: 36px;
        cursor: pointer;
      }
    }
  }
}
</style>

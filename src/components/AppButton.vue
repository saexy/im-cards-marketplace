<template>
  <div class="app-button">
    <button
      :type="type ?? 'button'"
      :disabled="disabled"
      :class="[size ? size : 'md', color ? color : 'primary']"
    >
      <slot></slot>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

type ButtonType = "button" | "submit" | "reset" | undefined;
type ButtonSize = "sm" | "md" | "lg";
type ButtonColor = "primary" | "secondary" | "light" | "dark";

defineProps<{
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  color?: ButtonColor;
}>();
</script>
<style scoped lang="scss">
.app-button {
  button {
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:disabled {
      opacity: 0.5;
    }

    &.sm {
      font-size: 16px;
      padding: 8px 16px;
    }

    &.md {
      font-size: 24px;
      padding: 8px 20px;
    }

    &.lg {
      font-size: 32px;
      padding: 8px 24px;
    }

    &.primary {
      background-color: var(--primary);
      color: var(--light);

      &:hover {
        background-color: var(--primary-extra);
      }
    }

    &.secondary {
      background-color: var(--secondary);
      color: var(--light);

      &:hover {
        background-color: var(--secondary-extra);
      }
    }

    &.dark {
      background-color: var(--dark);
      color: var(--light);
    }

    &.light {
      background-color: var(--light);
      color: var(--dark);
    }
  }
}
</style>

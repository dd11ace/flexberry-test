<script setup lang="ts">
defineProps<{
  tag?: string;
  noPadding?: boolean;
}>();
</script>

<template>
  <component
    class="base-card"
    :class="{ 'base-card--no-padding': noPadding }"
    :is="tag ? tag : 'div'"
  >
    <slot />
  </component>
</template>

<style lang="scss">
.base-card {
  padding: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: var(--background-white);

  &--no-padding {
    padding: 0;
  }
}
</style>

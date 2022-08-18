<script setup lang="ts">
defineProps<{
  tag?: string;
}>();
</script>

<template>
  <component class="base-container" :is="tag ? tag : 'div'">
    <slot />
  </component>
</template>

<style lang="scss">
.base-container {
  max-width: 754px;
  margin: 0 auto;
}
</style>

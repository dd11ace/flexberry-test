<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style lang="scss">
.base-button {
  min-width: 100%;
  font-size: 12px;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  color: var(--text-white);
  background-color: var(--blue-main);
  cursor: pointer;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const checked = ref(true);
</script>

<template>
  <label class="base-checkbox">
    <input class="base-checkbox__checkbox" type="checkbox" v-model="checked" />
    <span class="base-checkbox__checkmark"></span>
    {{ checked }}
  </label>
</template>

<style lang="scss">
.base-checkbox {
  display: block;
  position: relative;
  padding: 10px;
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-light-blue);
  }
}
</style>

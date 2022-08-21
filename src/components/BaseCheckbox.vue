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
  padding-left: 50px;
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-light-blue);
  }

  &__checkmark {
    position: absolute;
    margin-left: -30px;
    width: 20px;
    height: 20px;
    background-image: url(@/assets/img/checkbox_off.svg);
  }

  &__checkbox {
    position: absolute;
    appearance: none;

    &:checked + .base-checkbox__checkmark {
      background-image: url(@/assets/img/checkbox_on.svg);
    }

    &:disabled + .base-checkbox__checkmark {
      opacity: 0.5;
    }
  }
}
</style>

<script setup lang="ts">
import { computed } from 'vue';

type ModelValue = boolean;

const props = defineProps<{
  label?: string;
  modelValue: ModelValue;
  id?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: ModelValue): void;
}>();

const checkedValues = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value: ModelValue) => {
    emit('update:modelValue', value);
  },
});
</script>

<template>
  <label
    class="base-checkbox"
    :class="{ 'base-checkbox--disabled': disabled }"
    :for="id"
  >
    <input
      class="base-checkbox__checkbox"
      type="checkbox"
      v-model="checkedValues"
      :id="id"
      :disabled="disabled"
    />
    <span class="base-checkbox__checkmark"></span>
    {{ label }}
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

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background: none;
    }
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
  }
}
</style>

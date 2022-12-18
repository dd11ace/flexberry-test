<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';

const stopNumbers = [
  {
    title: 'Все',
    id: 'all',
    checked: true,
    disabled: false,
  },
  {
    title: 'Без пересадок',
    id: 'noStops',
    checked: false,
    disabled: false,
  },
  {
    title: '1 пересадка',
    id: '1stop',
    checked: false,
    disabled: false,
  },
  {
    title: '2 пересадки',
    id: '2stops',
    checked: false,
    disabled: false,
  },
  {
    title: '3 пересадки',
    id: '3stops',
    checked: false,
    disabled: false,
  },
];
</script>

<template>
  <BaseCard class="tickets-filter" :noPadding="true">
    <h2 class="tickets-filter__title">Количество пересадок</h2>

    <BaseCheckbox
      v-model="stopNumber.checked"
      v-for="stopNumber in stopNumbers"
      :key="stopNumber.id"
      :label="stopNumber.title"
      :id="stopNumber.id"
      :disabled="stopNumber.disabled"
    />
  </BaseCard>
</template>

<style lang="scss">
.tickets-filter {
  width: 232px;
  height: 252px;
  font-weight: 400;

  &__title {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.5px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 8px;
    padding: 20px;
    padding-bottom: 0;
  }
}
</style>

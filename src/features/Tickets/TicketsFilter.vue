<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';

const stopNumbers = [
  {
    title: 'Все',
    id: 'all',
  },
  {
    title: 'Без остановок',
    id: 'noStops',
  },
  {
    title: '1 пересадка',
    id: '1stop',
  },
  {
    title: '2 пересадки',
    id: '2stops',
  },
  {
    title: '3 пересадки',
    id: '3stops',
  },
];
</script>

<template>
  <BaseCard class="tickets-filter" :noPadding="true">
    <h2 class="tickets-filter__title">Количество пересадок</h2>

    <BaseCheckbox
      v-for="stopNumber in stopNumbers"
      :key="stopNumber.id"
      :title="stopNumber.title"
      :id="stopNumber.id"
    />
  </BaseCard>
</template>

<style lang="scss">
.tickets-filter {
  min-width: 232px;

  &__title {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.5px;
    margin: 0;
    margin-bottom: 5px;
    padding: 20px;
    padding-bottom: 0;
  }
}
</style>

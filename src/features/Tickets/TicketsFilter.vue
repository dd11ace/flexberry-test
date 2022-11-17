<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
// import { ref } from 'vue';

const stopNumbers = [
  {
    title: 'Все',
    id: 'all',
    checked: false,
    disabled: false,
  },
  {
    title: 'Без остановок',
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

// const checkedStopNumbers = ref([]);
</script>

<template>
  <BaseCard class="tickets-filter" :noPadding="true">
    <!-- <div>Checked values: {{ checkedStopNumbers }}</div> -->
    <h2 class="tickets-filter__title">Количество пересадок</h2>

    <BaseCheckbox
      checkedValues="checkedStopNumbers"
      v-for="stopNumber in stopNumbers"
      :key="stopNumber.id"
      :value="stopNumber.title"
      :id="stopNumber.id"
      :checked="stopNumber.checked"
      :disabled="stopNumber.disabled"
    />
  </BaseCard>
</template>

<style lang="scss">
.tickets-filter {
  min-width: 232px;
  min-height: 252px;

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

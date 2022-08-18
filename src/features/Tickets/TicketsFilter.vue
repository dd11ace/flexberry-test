<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import BaseCheckbox from '@/components/BaseCheckbox.vue';
</script>

<template>
  <BaseCard class="tickets-filter">
    <h2 class="tickets-filter__title">Количество пересадок</h2>
    <BaseCheckbox />
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
  }
}
</style>

<script setup lang="ts">
import type { Ticket } from './ticketsTypes';
import BaseCard from '@/components/BaseCard.vue';

defineProps<{ ticket: Ticket }>();
</script>

<template>
  <BaseCard class="tickets-card">
    <div class="tickets-card__header">
      <h3 class="tickets-card__price">{{ ticket.price }} Р</h3>
      <div>
        <img src="@/assets/img/S7 Logo.png" alt="S7 Airlines Логотип" />
      </div>
    </div>
    <div class="tickets-card__info">
      <div class="tickets-card__route">
        <p class="tickets-card__info-title">
          {{ ticket.segments[0].origin }} -
          {{ ticket.segments[0].destination }}
        </p>
        <p class="tickets-card__info-text">
          {{ ticket.segments[0].date[0] }}
        </p>
      </div>
      <div class="tickets-card__length">
        <p class="tickets-card__info-title">В пути</p>
        <p class="tickets-card__info-text">{{ ticket.segments[0].duration }}</p>
      </div>
      <div class="tickets-card__stops">
        <p class="tickets-card__info-title">{{ ticket.segments[0].stops }}</p>
        <p class="tickets-card__info-text">{{ ticket.segments[0].stops }}</p>
      </div>
    </div>
  </BaseCard>
</template>

<style lang="scss">
.tickets-card {
  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__price {
    font-size: 24px;
    line-height: 24px;
    color: var(--blue-main);
  }

  &__info {
    display: flex;
    justify-content: space-around;

    &-title {
      font-size: 12px;
      line-height: 18px;
      text-transform: uppercase;
      color: var(--text-gray);
    }

    &-text {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
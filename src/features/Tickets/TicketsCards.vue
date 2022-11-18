<script setup lang="ts">
import type { Ticket } from '@/api/apiTickets/getTickets';
import BaseCard from '@/components/BaseCard.vue';
import { formatNumber } from '@/helpers/formatNumber';

defineProps<{ ticket: Ticket }>();

const ticketNumberOfStops = (numberOfStops: number) => {
  if (numberOfStops > 4) {
    return `${numberOfStops} пересадок`;
  } else if (numberOfStops > 1) {
    return `${numberOfStops} пересадки`;
  } else if (numberOfStops === 1) {
    return '1 пересадка';
  } else {
    return 'Без пересадок';
  }
};

const ticketStopNames = (stopNames: string[]) => {
  if (stopNames.length > 0) {
    return stopNames.join(',');
  } else {
    return 'Без остановок';
  }
};

const ticketDuration = (duration: number) => {
  // const hours = Math.floor(duration / 60)
  //   .toString()
  //   .padStart(2, '0');
  // const minutes = (duration % 60).toString().padStart(2, '0');
  // return hours + 'ч ' + minutes + 'м';
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return (
    hours.toString().padStart(2, '0') +
    'ч ' +
    minutes.toString().padStart(2, '0') +
    'м'
  );
};

const ticketDate = (ticketDate: string) => {
  const date: Date = new Date(ticketDate);
  // const hours = date.getUTCHours().toString().padStart(2, '0');
  // const hours = date.getHours().toString().padStart(2, '0');
  // const minutes = date.getMinutes().toString().padStart(2, '0');
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  // return flightDuration();
  return hours + ':' + minutes;
};
</script>

<template>
  <BaseCard class="tickets-cards">
    <div class="tickets-cards__header">
      <h3 class="tickets-cards__price">{{ formatNumber(ticket.price) }} Р</h3>
      <div>
        <img src="@/assets/img/S7 Logo.png" alt="S7 Airlines Логотип" />
      </div>
    </div>
    <div class="tickets-cards__info">
      <div class="tickets-cards__route">
        <p class="tickets-cards__info-title">
          <!-- departure -->
          {{ ticket.segments[0].origin }} -
          <!-- arrival -->
          {{ ticket.segments[0].destination }}
        </p>
        <p class="tickets-cards__info-text">
          {{ ticketDate(ticket.segments[0].date) }}
        </p>
      </div>
      <div class="tickets-cards__length">
        <p class="tickets-cards__info-title">В пути</p>
        <p class="tickets-cards__info-text">
          {{ ticketDuration(ticket.segments[0].duration) }}
        </p>
      </div>
      <div class="tickets-cards__stops">
        <p class="tickets-cards__info-title">
          {{ ticketNumberOfStops(ticket.segments[0].stops.length) }}
        </p>
        <p class="tickets-cards__info-text">
          {{ ticketStopNames(ticket.segments[0].stops) }}
        </p>
      </div>
    </div>
  </BaseCard>
</template>

<style lang="scss">
.tickets-cards {
  min-width: 502px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-size: 24px;
    line-height: 24px;
    color: var(--blue-main);
  }

  &__info {
    display: flex;
    justify-content: space-between;
  }

  &__info-title {
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: var(--text-gray);
  }

  &__info-text {
    font-size: 14px;
    font-weight: 600;
  }
}
</style>

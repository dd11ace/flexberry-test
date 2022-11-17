<script setup lang="ts">
import type { Ticket } from './ticketsTypes';
import BaseCard from '@/components/BaseCard.vue';

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

// const ticketDuration = (duration: number) => {
//   // // Какой вариант лучше?
//   // // Использовать как разделитель в цене через pinia?
//   // return duration.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//   // // return duration.toLocaleString('ru-RU');
// };

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
  const date = new Date(ticketDate);
  // const hours = date.getUTCHours().toString().padStart(2, '0');
  // const hours = date.getHours().toString().padStart(2, '0');
  // const minutes = date.getMinutes().toString().padStart(2, '0');
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  // const flightDuration = () => {
  //   hours - hours;
  // };

  // return flightDuration();
  return hours + ':' + minutes;
};
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
          {{ ticketDate(ticket.segments[0].date) }}
        </p>
      </div>
      <div class="tickets-card__length">
        <p class="tickets-card__info-title">В пути</p>
        <p class="tickets-card__info-text">
          {{ ticketDuration(ticket.segments[0].duration) }}
        </p>
      </div>
      <div class="tickets-card__stops">
        <p class="tickets-card__info-title">
          {{ ticketNumberOfStops(ticket.segments[0].stops.length) }}
        </p>
        <p class="tickets-card__info-text">
          {{ ticketStopNames(ticket.segments[0].stops) }}
        </p>
      </div>
    </div>
  </BaseCard>
</template>

<style lang="scss">
.tickets-card {
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

<script setup lang="ts">
import type { Ticket } from '@/api/apiTickets/getTickets';
import BaseCard from '@/components/BaseCard.vue';
import { formatNumber } from '@/helpers/formatNumber';

defineProps<{ ticket: Ticket }>();

const ticketNumberOfStops = (numberOfStops: number) => {
  if (numberOfStops >= 5) {
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
  if (stopNames.length > 0) return stopNames.join(',');
  else return 'Без остановок';
};

const getTicketTime = (ticketDate: string) => {
  const date: Date = new Date(ticketDate);
  const dateHours: number = date.getHours();
  const dateMinutes: number = date.getMinutes();

  return { dateHours, dateMinutes };
};

const getTicketTimeOfDeparture = (ticketDate: string) => {
  const { dateHours, dateMinutes } = getTicketTime(ticketDate);
  dateHours.toString().padStart(2, '0');
  dateMinutes.toString().padStart(2, '0');

  return dateHours + ':' + dateMinutes;
};

const getTicketDuration = (ticketDuration: number) => {
  const durationHours: number = Math.floor(ticketDuration / 60);
  const durationMinutes: number = ticketDuration % 60;

  return { durationHours, durationMinutes };
};

const ticketDuration = (ticketDuration: number) => {
  const { durationHours, durationMinutes } = getTicketDuration(ticketDuration);
  durationHours.toString().padStart(2, '0');
  durationMinutes.toString().padStart(2, '0');

  return durationHours + 'ч ' + durationMinutes + 'м';
};

const ticketTimeDifference = (ticketDate: string, ticketDuration: number) => {
  const date: Date = new Date(ticketDate);
  const { dateHours, dateMinutes } = getTicketTime(ticketDate);
  const { durationHours, durationMinutes } = getTicketDuration(ticketDuration);

  const differenceInHours: Date = new Date(
    new Date(date).setHours(dateHours + durationHours)
  );
  const differenceinMinutes: Date = new Date(
    new Date(date).setMinutes(dateMinutes + durationMinutes)
  );

  const differenceInHoursAsNumber: number = differenceInHours.getHours();
  const differenceInMinutesAsNumber: number = differenceinMinutes.getMinutes();

  if (dateMinutes + durationMinutes >= 60) {
    const calcDifferenceInHours: number = differenceInHoursAsNumber + 1;
    const calcDifferenceInMinutes: number =
      (dateMinutes + durationMinutes) % 60;

    const differenceHours: string = calcDifferenceInHours
      .toString()
      .padStart(2, '0');
    const differenceMinutes: string = calcDifferenceInMinutes
      .toString()
      .padStart(2, '0');

    return differenceHours + ':' + differenceMinutes;
  } else {
    const differenceHours: string = differenceInHoursAsNumber
      .toString()
      .padStart(2, '0');
    const differenceMinutes: string = differenceInMinutesAsNumber
      .toString()
      .padStart(2, '0');

    return differenceHours + ':' + differenceMinutes;
  }
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
      <div class="tickets-cards__info-container">
        <p class="tickets-cards__info-title">
          <!-- departure -->
          {{ ticket.segments[0].origin }} -
          <!-- arrival -->
          {{ ticket.segments[0].destination }}
        </p>
        <p class="tickets-cards__info-text">
          {{ getTicketTimeOfDeparture(ticket.segments[0].date) }} -
          {{
            ticketTimeDifference(
              ticket.segments[0].date,
              ticket.segments[0].duration
            )
          }}
        </p>
      </div>
      <div class="tickets-cards__info-container">
        <p class="tickets-cards__info-title">В пути</p>
        <p class="tickets-cards__info-text">
          {{ ticketDuration(ticket.segments[0].duration) }}
        </p>
      </div>
      <div class="tickets-cards__info-container">
        <p class="tickets-cards__info-title">
          {{ ticketNumberOfStops(ticket.segments[0].stops.length) }}
        </p>
        <p class="tickets-cards__info-text">
          {{ ticketStopNames(ticket.segments[0].stops) }}
        </p>
      </div>
    </div>
    <div class="tickets-cards__info">
      <div class="tickets-cards__info-container">
        <p class="tickets-cards__info-title">
          <!-- departure -->
          {{ ticket.segments[1].origin }} -
          <!-- arrival -->
          {{ ticket.segments[1].destination }}
        </p>
        <p class="tickets-cards__info-text">
          {{ getTicketTimeOfDeparture(ticket.segments[1].date) }} -
          {{
            ticketTimeDifference(
              ticket.segments[1].date,
              ticket.segments[1].duration
            )
          }}
        </p>
      </div>
      <div class="tickets-cards__info-container">
        <p class="tickets-cards__info-title">В пути</p>
        <p class="tickets-cards__info-text">
          {{ ticketDuration(ticket.segments[1].duration) }}
        </p>
      </div>
      <div class="tickets-cards__info-container">
        <p class="tickets-cards__info-title">
          {{ ticketNumberOfStops(ticket.segments[1].stops.length) }}
        </p>
        <p class="tickets-cards__info-text">
          {{ ticketStopNames(ticket.segments[1].stops) }}
        </p>
      </div>
    </div>
  </BaseCard>
</template>

<style lang="scss">
.tickets-cards {
  min-width: 502px;
  padding-top: 0;

  &__header {
    display: flex;
    justify-content: space-between;
    padding-top: 1px;
    margin-bottom: -9px;
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
    height: 40px;
    margin-top: -7px;
    margin-bottom: 17px;

    &:last-child {
      margin-bottom: 9px;
    }
  }

  &__info-container {
    width: 141px;
    height: 39px;
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
    margin-top: -10px;
  }
}
</style>

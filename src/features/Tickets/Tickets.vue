<script setup lang="ts">
import TicketsFilter from './TicketsFilter.vue';
</script>

<template>
  <div class="tickets">
    <aside class="tickets__col-left">
      <TicketsFilter />
    </aside>
  </div>
</template>

<style lang="scss">
.tickets {
  display: flex;
}
</style>

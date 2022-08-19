<script setup lang="ts">
import BaseContainer from '@/components/BaseContainer.vue';
import { RouteNames } from '@/router';
</script>

<template>
  <BaseContainer class="main-layout">
    <header class="main-layout__header">
      <RouterLink :to="{ name: RouteNames.Home }">
        <img
          src="@/assets/img/logo.svg"
          alt="Логотип сайта"
          width="88"
          height="88"
        />
      </RouterLink>
    </header>
    <main>
      <slot />
    </main>
  </BaseContainer>
</template>

<style lang="scss">
.main-layout {
  &__header {
    display: flex;
    justify-content: center;
    margin-top: 41px;
    margin-bottom: 32px;
  }
}
</style>

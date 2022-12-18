<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useLayout } from '@/composables/useLayout';

const Layout = useLayout();
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

import { ref, watch, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';

export const useLayout = () => {
  const route = useRoute();
  const layoutName = ref('MainLayout');

  watch(
    () => route.meta.layout,
    (newVal) => {
      if (typeof newVal === 'string' && layoutName.value !== newVal) {
        layoutName.value = newVal;
      }
    }
  );

  const Layout = computed(() => {
    const layoutNameValue = layoutName.value;

    return defineAsyncComponent(
      () => import(`@/layout/${layoutNameValue}/${layoutNameValue}.vue`)
    );
  });

  return Layout;
};

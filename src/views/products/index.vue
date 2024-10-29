<template>
  <q-list class="border">
    <q-item v-for="product in products" :key="product.id" class="q-pa-sm">
      {{ product.name }}
    </q-item>
  </q-list>
</template>

<script lang="ts">
import type { Product } from '@/graphql/generated/graphql';

export default defineComponent({
  name: 'Products',
  setup() {
    const products = ref<Product[]>([]);

    onMounted(async () => {
      try {
        products.value = await productStore.getAll();
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    });

    return {
      products,
    };
  },
});
</script>

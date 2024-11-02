<template>
  <q-list class="border row q-col-gutter-md">
    <q-item v-for="product in products" :key="product.id" class="q-pa-sm">
      <q-card class="bg-grey-6">
        {{ product.name }}
        <q-action-sheet>
          <q-item clickable :to="`/products/edit/${product.id}`">
            <q-icon>mdi-pencil</q-icon>
          </q-item>
        </q-action-sheet>
      </q-card>
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

<template>
  <q-list class="border">
    <q-item v-for="product in products" :key="product.id" class="q-pa-sm">
      {{ product.name }}
      <q-action-sheet>
        <q-list>
          <q-item clickable :to="`/products/edit/${product.id}`">
            <q-item-section><q-icon>Edit</q-icon></q-item-section>
          </q-item>
        </q-list>
      </q-action-sheet>
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

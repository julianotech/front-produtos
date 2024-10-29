<template>
  <q-card>
    <q-card-section>
      <q-input v-model="data.name" label="Name" />
      <q-input v-model.number="data.price" label="Price" />
      <q-input v-model.number="data.stock" label="Stock" />
    </q-card-section>
    <q-card-actions>
      <q-btn label="Add" @click="submit" />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import type { ProductCreateInput } from '@/graphql/generated/graphql';

export default defineComponent({
  name: 'Edit',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup({ id }) {
    const data = reactive<ProductCreateInput>({
      name: 'vinte e cinco',
      price: 99,
      stock: 10,
    });
    const submit = async () => {
      try {
        await productStore.update(id, data).then((res) => {
          router.push(`/products`);
        });
      } catch (error) {
        console.error('Error editing product:', error);
      }
    };

    return {
      submit,
      data,
    };
  },
});
</script>

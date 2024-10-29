<template>
  <q-card class="bg-grey-6">
    <q-card-section>
      <q-input v-model="data.name" label="Name" />
      <q-input v-model.number="data.price" label="Price" />
      <q-input v-model.number="data.stock" label="Stock" />
    </q-card-section>
    <q-card-actions>
      <q-btn label="Edit" @click="submit" />
      <q-btn label="<-" @click="router.back()" />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import type { ProductUpdateInput } from '@/graphql/generated/graphql';

export default defineComponent({
  name: 'ProductEdit',
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup({ id }) {
    const data = ref<ProductUpdateInput>({});
    onMounted(async () => {
      await productStore.getById(id).then((product) => {
        data.value = {
          name: product.name,
          price: product.price,
          stock: product.stock,
        };
      });
    });
    const submit = async () => {
      try {
        await productStore.update(id, data.value).then(() => router.back());
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

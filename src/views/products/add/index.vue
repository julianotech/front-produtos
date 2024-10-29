<template>
  <q-card>
    <q-card-section>
      <q-input v-model="data.name" label="Name" />
      <q-input v-model="data.price" label="Price" />
      <q-input v-model="data.stock" label="Stock" />
    </q-card-section>
    <q-card-actions>
      <q-btn label="Add" @click="submit" />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import type { ProductUpdateInput } from '@/graphql/generated/graphql';

export default defineComponent({
  name: 'Add',
  setup() {
    const data = reactive<ProductUpdateInput>({
      name: 'oito',
      stock: 10,
      price: 2,
    });
    const submit = async () => {
      try {
        await productStore.add({ data }).then((res) => {
          console.log({ res });
          router.push(`/products/edit/${res}`);
        });

        // const router = useRouter()
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };

    return {
      submit,
      data,
    };
  },
});
</script>

import { defineStore } from 'pinia';

import type { Product } from '@/graphql/generated/graphql';

const storeId = 'products';
export const productStore = defineStore(storeId, {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  getters: {},

  actions: {
    async getAll(): Promise<Product[]> {
      await query<{ products: Product[] }>({ query: ProductsDocument }).then(
        ({ products }) => {
          this.products = products;
        },
      );

      return this.products;
    },
    async getById(id: string): Promise<Product> {
      const opts = { query: ProductDocument, variables: { id } };

      return await query<Product>(opts);
    },
  },
  // persist: true,
})();

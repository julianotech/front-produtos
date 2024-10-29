import { defineStore } from 'pinia';

import type {
  Product,
  ProductCreateInput,
  ProductUpdateInput,
} from '@/graphql/generated/graphql';

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

    async add(data: ProductCreateInput): Promise<string> {
      return await mutation<
        { productCreate: { id: string } },
        ProductCreateInput
      >(ProductAddDocument, data).then(({ productCreate }) => {
        console.log({ productCreate });
        return productCreate.id;
      });
    },

    async update(id: string, data: ProductUpdateInput): Promise<Product> {
      return await mutation<Product, { id: string; data: ProductUpdateInput }>(
        ProductUpdateDocument,
        { id, data },
      );
    },
  },
  // persist: true,
})();

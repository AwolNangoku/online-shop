import { Product } from "@/types/product";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fakestoreapi = createApi({
  reducerPath: "fakestoreapi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_FAKE_STORE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    getProduct: builder.query<Product, number>({
      query: (id: number) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = fakestoreapi;

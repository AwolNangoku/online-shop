import { useGetProductsQuery } from "@/services/fakestore";

export default function useProducts() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  return {
    products,
    isLoading,
    error,
  };
}

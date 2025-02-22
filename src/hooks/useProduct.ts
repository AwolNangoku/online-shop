import { useGetProductQuery } from "@/services/fakestore";

export default function useProduct(id: string) {
  const { data: product, error, isLoading } = useGetProductQuery(parseInt(id));

  return {
    product,
    isLoading,
    error,
  };
}

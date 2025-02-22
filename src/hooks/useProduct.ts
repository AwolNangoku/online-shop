import useSWR from "swr";

const { VITE_FAKE_STORE_BASE_URL } = import.meta.env;

export default function useProduct(id: string) {
  const productKey = id ? `/products/${id}` : null;
  const { data } = useSWR(productKey, async (url) => {
    const response = await fetch(`${VITE_FAKE_STORE_BASE_URL}${url}`);
    return response.json();
  });

  return {
    product: data,
    isLoading: !data,
  };
}

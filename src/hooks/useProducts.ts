import useSWR from "swr";

const { VITE_FAKE_STORE_BASE_URL } = import.meta.env;

export default function useProducts() {
  const productKey = "/products";
  const { data } = useSWR(productKey, async (url) => {
    const response = await fetch(`${VITE_FAKE_STORE_BASE_URL}${url}`);
    return response.json();
  });

  console.log("--------data------", data);

  return {
    products: data,
    isLoading: !data,
  };
}

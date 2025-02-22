import { CartNav, ProductCard } from "@/components";
import { useProducts } from "@/hooks";
import { useAppSelector } from "@/redux/hooks";
import { Product } from "@/types/product";
import { Box, Grid, Spacer, VStack } from "@chakra-ui/react";

const Products = () => {
  const { products } = useProducts();
  const { items: cartItems } = useAppSelector((state) => state.cart);

  return (
    <Box display="flex" h="100vh">
      <Box flexGrow={1} margin="auto">
        <VStack bg="gray.400">
          <Spacer p={1} />
          <CartNav
            title="Product Storefront"
          />

          <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]} gap="6">
            {
              (products || []).map((product: Product) => (
                <ProductCard
                  key={product.id}
                  productId={`${product.id}`}
                  qtyInCart={cartItems.find((item) => parseInt(item.id) === product.id)?.quantity || 0}
                />
              ))
            }
          </Grid>
        </VStack>
      </Box>
    </Box>
  )
}
export default Products;
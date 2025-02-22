import { ProductCard } from "@/components";
import Cart from "@/components/cart";
import { useAppSelector } from "@/redux/hooks";
import { Box, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router";

const Product = () => {
  const { productId = "" } = useParams<{ productId: string }>();
  const { items: cartItems } = useAppSelector((state) => state.cart);

  return (
    <Box display="flex" bg="gray.400" h="100vh">
      <Box flexGrow={1}>
        <VStack justifyContent="center" alignItems="center">
          <Spacer p={1} />
          <VStack w="100%" position="sticky" top="0" zIndex="1" bg="gray.400">
            <HStack w="100%" justifyContent="center" alignItems="flex-end">
              <Cart />
            </HStack>

            <Spacer p={1} />
            <HStack>
              <Text textStyle="3xl" fontWeight="bold">Product Details</Text>
            </HStack>
            <Spacer p={1} />

            <ProductCard
              isViewingProduct
              productId={productId}
              qtyInCart={cartItems.find((item) => item.id === productId)?.quantity || 0}
            />
          </VStack>
        </VStack>
      </Box>
    </Box>
  )
}
export default Product;
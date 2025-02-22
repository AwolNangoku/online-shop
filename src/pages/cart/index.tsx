import { routes } from "@/app-router/store-routes";
import { CartNav, ProductCard } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { CartItem } from "@/types/cart-item";
import { Box, Button, Grid, Spacer, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const goToStorefront = () => navigate(routes.products, { replace: true });
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box display="flex" h="100vh" cursor="pointer" bg="gray.400">
      <Box flexGrow={1} margin="auto">
        <VStack bg="gray.400">
          <Spacer p={1} />
          <CartNav
            title="Cart Items"
            total={cartTotal}
          />

          {cartItems.length === 0 ? (
              <Button variant="solid" onClick={goToStorefront}>Storefront</Button>
            ) : (
              <Grid templateColumns={["repeat(1, 1fr)"]} gap="6">
                {cartItems.map((cartItem: CartItem) => (
                  <ProductCard
                    key={cartItem.id}
                    productId={cartItem.id}
                    quantity={cartItem.quantity}
                    subTotal={cartItem.price * cartItem.quantity}
                    qtyInCart={cartItem.quantity}
                  />
                ))}
              </Grid>
            )}
        </VStack>
      </Box>
    </Box>
  )
}
export default Cart;
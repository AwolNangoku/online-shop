import { routes } from "@/app-router/store-routes";
import { useAppSelector } from "@/redux/hooks";
import { Badge, Box, Float, IconButton } from "@chakra-ui/react"
import { CgShoppingCart } from "react-icons/cg";
import { useNavigate } from "react-router";

const Cart = () => {
  const { items } = useAppSelector(state => state.cart);
  const navigate = useNavigate();
  const goToCart = () => navigate(routes.cart);

  return (
    <Box display="inline-block" pos="relative" onClick={goToCart}>
      <IconButton aria-label="cart">
        <CgShoppingCart size="30px" />
      </IconButton>
      <Float placement="bottom-end">
        <Badge size="sm" variant="solid" colorPalette="teal">
          {items.length}
        </Badge>
      </Float>
    </Box>
  )
}
export default Cart;

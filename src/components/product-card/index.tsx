import { routes } from "@/app-router/store-routes"
import { useProduct } from "@/hooks"
import { useAppDispatch } from "@/redux/hooks"
import { addItem, removeItem } from "@/redux/store/cart"
import { Button, Card, Image, Skeleton, Text, VStack } from "@chakra-ui/react"
import { generatePath, useNavigate } from "react-router"

interface ProductCardProps {
  isViewingProduct?: boolean
  productId: string
  quantity?: number
  subTotal?: number
  qtyInCart: number
}
const ProductCard = ({
  productId,
  quantity,
  subTotal,
  isViewingProduct,
  qtyInCart = 0
}: ProductCardProps) => {
  const { product, isLoading } = useProduct(productId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const goToProduct = () => navigate(generatePath(routes.product, { productId }));
  const goToStorefront = () => navigate(routes.products, { replace: true });
  const goToCart = () => navigate(routes.cart, { replace: true});
  const onAddToCart = () => dispatch(addItem({ id: productId, quantity: 1, price: product?.price || 0 }));
  const removeFromCart = () => dispatch(removeItem({ id: productId, quantity: 1, price: product?.price || 0 }))

  return isLoading ? (
    <VStack bg="gray.100" borderRadius="md" p={4}>
      <Skeleton height="500px" width="300px" />
    </VStack>
  ) : (
    <Card.Root bg="black" flexDir="column" overflow="hidden" maxW="sm" borderRadius="md" boxShadow="md">
      <Image
        src={product?.image}
        alt="image not available"
      />
      <Card.Body gap="2">
        <Card.Title>{product?.title}</Card.Title>
        <Card.Description>
          {product?.description}
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          R{Number(product?.price).toFixed(2)}
        </Text>
        {quantity ? (
          <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
            Qty: {quantity}
          </Text>
        ) : null}
        {subTotal ? (
          <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
            Sub Total: {Number(subTotal).toFixed(2)}
          </Text>
        ) : null}
      </Card.Body>
      <Card.Footer gap="2" alignItems={isViewingProduct ? "center" : "flex-end"}>
        {isViewingProduct ? (
          <>
            <Button variant="outline" onClick={goToStorefront}>Storefront</Button>
            <Button variant="outline" onClick={goToCart}>View Cart</Button>
          </>
        ) : (<Button variant="outline" onClick={goToProduct}>View Details</Button>)}
        <Button variant="solid" onClick={onAddToCart}>+</Button>
        {qtyInCart > 0 ? (
          <Button bg="red.300" variant="solid" onClick={removeFromCart}>-</Button>
        ) : null}
        {subTotal ? (
          <Button variant="outline" onClick={goToStorefront}>Storefront</Button>
        ) : null}
      </Card.Footer>
    </Card.Root>
  )
}
export default ProductCard;
import { HStack, Spacer, Text, VStack } from "@chakra-ui/react"
import Cart from "../cart"

interface CartNavProps {
  title: string;
  total?: number;
}

const CartNav = ({ title, total = 0 }: CartNavProps) => {
  return (
    <VStack w="100%" position="sticky" top="0" zIndex="1" bg="gray.400">
      <HStack w="100%" justifyContent="center" alignItems="flex-end">
        <Cart />
      </HStack>

      <Spacer p={1} />
      <VStack>
        <Text textStyle="3xl" fontWeight="bold">{title}</Text>
        {total ? (
          <Text textStyle="3xl" fontWeight="bold">Total: R{Number(total).toFixed(2)}</Text>
        ) : null}
        
      </VStack>
    </VStack>
  )
}
export default CartNav;
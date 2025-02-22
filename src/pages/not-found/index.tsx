import { routes } from "@/app-router/store-routes";
import { Button, Container, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <VStack>
        <Text>404 Not Found</Text>
        <Text>Sorry, the page you are looking for does not exist.</Text>
        <Button onClick={() => navigate(routes.products)}>Back to Storefront</Button>
      </VStack>
    </Container>
  )
}
export default NotFound;
import { Box } from "@chakra-ui/react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

interface CheckoutProps {
  orderAmount: number;
}

const Checkout = ({ orderAmount }: CheckoutProps) => {
  const [{ options, isPending}, dispatch] = usePayPalScriptReducer();

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: orderAmount,
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
    console.log('Approval details....', details);
    const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  }

  if (isPending) return <Box>Loading...</Box>;
  return (
    <Box>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => onCreateOrder(data, actions)}
        onApprove={(data, actions) => onApproveOrder(data, actions)}
        onError={(err) => console.log(err)}
      />
    </Box>
  )
}
export default Checkout;
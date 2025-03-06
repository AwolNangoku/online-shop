import { Box } from "@chakra-ui/react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"

interface CheckoutProps {
  orderAmount: number;
}

const Checkout = ({ orderAmount }: CheckoutProps) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [{ options, isPending}, dispatch] = usePayPalScriptReducer();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onApproveOrder = (data, actions) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
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
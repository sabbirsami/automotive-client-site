import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L2vNMJH0mXagrhOdzLEhBYwbNjUZQy6o9TQRQP00TOEqz5YJutO7I2OjEflJDptHPmz9U3iLzgX9sBRtIlYTIB900kUiVeM24"
);
const Payment = () => {
    return (
        <div className="container-lg pb-32 pt-10">
            <h2 className="text-2xl font-semibold pb-16">Payment</h2>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;

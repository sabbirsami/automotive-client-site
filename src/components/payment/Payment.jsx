import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("");
const Payment = () => {
    const id = useParams();

    console.log(id);
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

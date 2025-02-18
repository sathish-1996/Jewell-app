// import { Button } from "bootstrap";
import React, { useState } from "react";
import { Card, CardBody, InputGroup ,Button} from "react-bootstrap";
// import { Card, CardBody } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { label } from "@/components/ui/label";
import { FaCreditCard, FaPaypal } from "react-icons/fa";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold text-center mb-4">Payment</h2>
        <div className="flex justify-center gap-4 mb-4">
          <Button
            variant={paymentMethod === "credit_card" ? "default" : "outline"}
            onClick={() => setPaymentMethod("credit_card")}
          >
            <FaCreditCard className="mr-2" /> Credit Card
          </Button>
          <Button
            variant={paymentMethod === "paypal" ? "default" : "outline"}
            onClick={() => setPaymentMethod("paypal")}
          >
            <FaPaypal className="mr-2" /> PayPal
          </Button>
        </div>

        {paymentMethod === "credit_card" && (
          <CardBody>
            <div className="mb-4">
              <label>Card Number</label>
              <InputGroup type="text" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label>Expiry Date</label>
                <InputGroup type="text" placeholder="MM/YY" />
              </div>
              <div>
                <label>CVV</label>
                <InputGroup type="text" placeholder="123" />
              </div>
            </div>
            <Button className="w-full">Pay Now</Button>
          </CardBody>
        )}

        {paymentMethod === "paypal" && (
          <CardBody>
            <p className="text-center text-gray-600">You will be redirected to PayPal.</p>
            <Button className="w-full mt-4">Proceed with PayPal</Button>
          </CardBody>
        )}
      </Card>
    </div>
  );
};

export default PaymentPage;

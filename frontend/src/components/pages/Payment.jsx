import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const Payment = ({ order }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Update payment method and payment status in your backend
        // You should implement the `updatePayment` function
        // await updatePayment(order._id, paymentMethod);
        navigate('/thank-you');
    };

    return (
        <PaymentForm onSubmit={handleSubmit}>
        <InputLabel htmlFor="paymentMethod">Payment Method</InputLabel>
        <Input
            id="paymentMethod"
            type="text"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
        />
        <Button type="submit">Submit Payment</Button>
        </PaymentForm>
    );
};

export default Payment;

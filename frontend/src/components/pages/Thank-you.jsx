import React, { useContext, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
import theme from '../utils/Variables';
import { CartContext } from '../utils/context';

const bounce = keyframes`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 1);

  .bounce {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${theme.colors.button};
    border-radius: 100%;
    animation: ${bounce} 1.2s infinite ease-in-out;
  }

  .bounce1 {
    animation-delay: -0.32s;
  }

  .bounce2 {
    animation-delay: -0.16s;
  }
`;

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: ${theme.layout.spaceBetween30};
  margin-bottom: ${theme.layout.spaceBetween30};
  width: 80%;
  padding: 20px;

  @media (min-width: ${theme.breakpoints.up.medium}) {
      width: 50%;
  }
`;

const ThankYouTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${theme.colors.titleH1};
  margin-bottom: ${theme.layout.spaceBetween20};

  @media (min-width: ${theme.breakpoints.up.medium}) {
      font-size: 1.75rem;
  }
`;

const ThankYouSubtitle = styled.h4`
  font-size: 1.125rem;
  font-weight: normal;
  argin-bottom: ${theme.layout.spaceBetween10};

  @media (min-width: ${theme.breakpoints.up.medium}) {
      font-size: 1.5rem;
  }
`;

const OrderSummary = styled.div`
  width: 100%;
  padding: ${theme.layout.spaceBetween20};;
  margin-bottom: ${theme.layout.spaceBetween20};
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

const OrderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${theme.layout.spaceBetween20} ${theme.layout.spaceBetween10};
`;

const OrderDetail = styled.div`
  font-size: 1rem;
`;

const ThankYou = () => {
  const { orderPlaced, setOrderInfos, getInitialOrderInfos } = useContext(CartContext);
  useEffect(() => {
    setOrderInfos(getInitialOrderInfos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if(!orderPlaced || !orderPlaced.orderItems || orderPlaced.orderItems.length === 0) {
    return <LoaderContainer />
  }

  return (
    <ThankYouContainer>
      <ThankYouTitle>Thank you for your order!</ThankYouTitle>
      <ThankYouSubtitle>Order summary</ThankYouSubtitle>
      <OrderSummary>
        <OrderDetails>
          <OrderDetail>Order ID: {orderPlaced._id}</OrderDetail>
          <OrderDetail>Date: {new Date(orderPlaced.createdAt).toLocaleDateString()}</OrderDetail>
        </OrderDetails>
        <OrderDetails>
          <OrderDetail>Total product: {orderPlaced.orderItems.length}</OrderDetail>
          <OrderDetail>Total amount: ${orderPlaced.totalAmount}</OrderDetail>
        </OrderDetails>
      </OrderSummary>
      <p>Your order has been successfully registered and will be shipped soon!</p>
    </ThankYouContainer>
  );
};

export default ThankYou;

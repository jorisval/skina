import React, { useState, useContext } from 'react';
import {
  CheckoutContainer,
  FormTitle,
  FormGroup,
  FormRow,
  FormSection,
  StyledLabel,
  StyledInput,
  CardDetails,
  StyledButton,
  StyledRadioWrapper,
  StyledRadioLabel,
  StyledRadioInput,
  FormSeparator,
} from '../styles/Checkout';
import { CartContext } from '../utils/context/index';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { orderInfos, setOrderInfos, setOrderPlaced } = useContext(CartContext);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [billingAddressOption, setBillingAddressOption] = useState('same');
    const navigate = useNavigate();

    const setCustomerInfo = (field, value) => {
        setOrderInfos({
        ...orderInfos,
        [field]: value,
        });
    };

    const setAddressInfo = (type, field, value) => {
        setOrderInfos({
        ...orderInfos,
        [type]: { ...orderInfos[type], [field]: value },
        });
    };

    async function handleSubmit(e) {
      e.preventDefault();
    
      // Create a local copy of the orderInfos object
      const updatedOrderInfos = { ...orderInfos };
    
      if (billingAddressOption === 'same') {
        updatedOrderInfos.billingAddress = { ...orderInfos.shippingAddress };
      }

      //Is better to create a function to handle payment values
        
      /*orderStatus:
      'Pending': The order has been placed but not yet processed.
      'Processing': The order is being processed (e.g., items are being prepared for shipment).
      'Shipped': The order has been shipped to the customer.
      'Delivered': The order has been delivered to the customer.
      'Cancelled': The order has been cancelled by the customer or the store.
      
      paymentStatus:
      'Pending': Payment has not been completed (e.g., waiting for the customer to complete the payment process).
      'Paid': The payment has been received.
      'Refunded': The payment has been refunded to the customer.
      'Failed': The payment has failed (e.g., due to insufficient funds or an expired card).
      
      The paymentAmount field is typically updated after the customer has completed the payment process, 
      either through a payment gateway API or by processing the payment internally. 
      This field should be set to the total amount paid by the customer, including taxes and shipping fees. 
      You can update the paymentAmount field once the payment is successfully processed, 
      either in the handleSubmit function or in a separate function that handles the payment process.
      */
    
      updatedOrderInfos.orderStatus = 'Pending';
      updatedOrderInfos.paymentMethod = paymentMethod;
      updatedOrderInfos.paymentStatus = 'Pending';
      updatedOrderInfos.paymentAmount = orderInfos.totalAmount;
    
      try {
        const response = await fetch('http://localhost:3000/api/order/', {
          method: "POST",
          body: JSON.stringify(updatedOrderInfos),
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        const order = await response.json();
        setOrderPlaced(order);
    
        // Reset the form
        e.target.reset();
      } catch (error) {
        console.error("Error:", error);
      }
      navigate('/thank-you');
    };
    

    const addressFields = (type) => (
        <FormRow>
        <FormGroup>
            <StyledLabel htmlFor={`${type}Street`}>Street</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}Street`}
            value={orderInfos[type].street}
            onChange={(e) => setAddressInfo(type, 'street', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor={`${type}City`}>City</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}City`}
            value={orderInfos[type].city}
            onChange={(e) => setAddressInfo(type, 'city', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor={`${type}State`}>State</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}State`}
            value={orderInfos[type].state}
            onChange={(e) => setAddressInfo(type, 'state', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor={`${type}Zip`}>ZIP Code</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}Zip`}
            value={orderInfos[type].zipCode}
            onChange={(e) => setAddressInfo(type, 'zipCode', e.target.value)}
            />
        </FormGroup>
        <FormGroup>
            <StyledLabel htmlFor={`${type}Country`}>Country</StyledLabel>
            <StyledInput
            type="text"
            id={`${type}Country`}
            value={orderInfos[type].country}
            onChange={(e) => setAddressInfo(type, 'country', e.target.value)}
            />
        </FormGroup>
        </FormRow>
    );

    const cardDetails = () => (
        <CardDetails>
        <FormRow>
            <FormGroup>
                <StyledLabel htmlFor="cardNumber">Card number</StyledLabel>
                <StyledInput type="text" id="cardNumber" />
            </FormGroup>
            <FormGroup>
                <StyledLabel htmlFor="expirationDate">Expiration date</StyledLabel>
                <StyledInput type="text" id="expirationDate" />
            </FormGroup>
            <FormGroup>
                <StyledLabel htmlFor="securityCode">Secure code</StyledLabel>
                <StyledInput type="text" id="securityCode" />
            </FormGroup>
        </FormRow>
        </CardDetails>
    );

    return (
        <CheckoutContainer>
            <form onSubmit={handleSubmit}>
                <FormSection>
                <FormTitle>Contact information</FormTitle>
                <FormRow>
                    <FormGroup>
                    <StyledLabel htmlFor="name">Name</StyledLabel>
                    <StyledInput
                        type="text"
                        id="name"
                        value={orderInfos.name}
                        onChange={(e) => setCustomerInfo('name', e.target.value)}
                    />
                    </FormGroup>
                    <FormGroup>
                    <StyledLabel htmlFor="email">Email</StyledLabel>
                    <StyledInput
                        type="email"
                        id="email"
                        value={orderInfos.email}
                        onChange={(e) => setCustomerInfo('email', e.target.value)}
                    />
                    </FormGroup>
                </FormRow>
                </FormSection>
                <FormSection>
                <FormTitle>Shipping adresse</FormTitle>
                {addressFields('shippingAddress')}
                </FormSection>
                <FormSection>
                <FormTitle>Billing address</FormTitle>
                <StyledRadioWrapper>
                  <StyledRadioLabel>
                    <StyledRadioInput
                      type="radio"
                      name="billingAddressOption"
                      value="same"
                      checked={billingAddressOption === 'same'}
                      onChange={(e) => setBillingAddressOption(e.target.value)}
                    />
                    Same as shipping address
                  </StyledRadioLabel>
                  <StyledRadioLabel>
                    <StyledRadioInput
                      type="radio"
                      name="billingAddressOption"
                      value="different"
                      checked={billingAddressOption === 'different'}
                      onChange={(e) => setBillingAddressOption(e.target.value)}
                    />
                    Use a different address
                  </StyledRadioLabel>
                </StyledRadioWrapper>
                {billingAddressOption === 'different' && addressFields('billingAddress')}
                <FormSeparator />
              </FormSection>
              <FormSection>
                <FormTitle>Payment method</FormTitle>
                <StyledRadioWrapper>
                  <StyledRadioLabel>
                    <StyledRadioInput
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit card
                  </StyledRadioLabel>
                  <StyledRadioLabel>
                    <StyledRadioInput
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    PayPal
                  </StyledRadioLabel>
                </StyledRadioWrapper>
                {paymentMethod === 'card' && cardDetails()}
                <FormSeparator />
              </FormSection>
              <FormSection style={{border: 'unset'}}>
                <StyledButton type="submit">Finalize order</StyledButton>
              </FormSection>
            </form>
            </CheckoutContainer>
    );
      
};

export default Checkout;
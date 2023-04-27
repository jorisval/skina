// src/components/ThankYouPopup.js
import React from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContent = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  width: 80%;
  max-width: 400px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const ThankYouTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ThankYouPopup = ({ onClose }) => {
    return (
        <PopupOverlay onClick={onClose}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={onClose}>&times;</CloseButton>
              <ThankYouTitle>Thank you for contacting us!</ThankYouTitle>
              <p>We will answer you as soon as possible!</p>
          </PopupContent>
        </PopupOverlay>
    );
};

export default ThankYouPopup;

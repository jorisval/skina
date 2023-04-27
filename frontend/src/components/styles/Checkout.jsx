import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const CheckoutContainer = styled.div`
    animation: ${fadeIn} 1s ease-in;
    margin: auto;
    margin-top: ${theme.layout.spaceBetween30};
    margin-bottom: ${theme.layout.spaceBetween30};
    width: 80%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f5f5f5;

    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 50%;
    }
`;

export const CardDetails = styled.div`
  margin-bottom: 20px;
`;

export const FormSection = styled.div`
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 10px;
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.c4};
    `;

export const FormTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 800;
    color: ${theme.colors.titleH1};
    margin-bottom: ${theme.layout.spaceBetween20};

    @media (min-width: ${theme.breakpoints.up.medium}) {
        font-size: 1.75rem;
    }
`;

export const FormGroup = styled.div`
    margin-bottom: ${theme.layout.spaceBetween20};
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: ${props => (props.fullWidth ? "90%" : "40%")}; 
    }
`;

export const FormRow = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const StyledInput = styled.input`
    font-family: ${theme.typography.primaryFontFamily};
    font-size: 0.9375rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: ${theme.colors.paragraph};
    width: 90%;
    border: 1px ${theme.colors.c4} solid;
    padding: ${theme.layout.spaceBetween10};
    margin-bottom: ${theme.layout.spaceBetween20};
    border-radius: 5px;

    @media (min-width: ${theme.breakpoints.up.medium}) {
        font-size: 1rem;
    }

    &:focus {
        outline: none;
    }
`;

export const StyledLabel = styled.label`
    font-family: ${theme.typography.primaryFontFamily};
    font-size: 0.9375rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: ${theme.colors.paragraph};
    margin-bottom: 5px;
    display: block;

    @media (min-width: ${theme.breakpoints.up.medium}) {
        font-size: 1rem;
    }
`;

export const StyledSelect = styled.select`
    font-family: ${theme.typography.primaryFontFamily};
    font-size: 0.9375rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: ${theme.colors.paragraph};
    width: 90%;
    border: 1px ${theme.colors.c4} solid;
    padding: ${theme.layout.spaceBetween10};
    margin-bottom: ${theme.layout.spaceBetween20};
    border-radius: 5px;

    @media (min-width: ${theme.breakpoints.up.medium}) {
        font-size: 1rem;
        width: 40%;
    }
`;

export const StyledButton = styled.button`
    font-family: ${theme.typography.primaryFontFamily};
    font-size: 0.875rem;
    font-weight: 400;
    color: ${theme.colors.white};
    padding: 0.375rem 1.625rem;
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: 2rem;
    cursor: pointer;
    margin-top: ${theme.layout.spaceBetween20};
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${theme.colors.link};
    }
`;

export const StyledRadioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.layout.spaceBetween20};

    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
    }
`;

export const StyledRadioLabel = styled.label`
    font-family: ${theme.typography.primaryFontFamily};
    font-size: 0.9375rem;
    line-height: 1.375rem;
    font-weight: 400;
    color: ${theme.colors.paragraph};
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    @media (min-width: ${theme.breakpoints.up.medium}) {
        font-size: 1rem;
        margin-right: 20px;
        margin-bottom: 0;
    }
`;

export const StyledRadioInput = styled.input`
    margin-right: 10px;
`;

export const FormSeparator = styled.hr`
    border: 1px solid ${theme.colors.c4};
    margin-top: ${theme.layout.spaceBetween20};
    margin-bottom: ${theme.layout.spaceBetween20};
`;

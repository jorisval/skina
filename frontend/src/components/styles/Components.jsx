import { createGlobalStyle } from 'styled-components';
import theme from '../utils/Variables';

const ComponentsStyle = createGlobalStyle`
    .add-to-cart {
        font-family: ${theme.typography.primaryFontFamily};
        font-size: 1rem;
        font-weight: 300;
        color: ${theme.colors.white};
        padding: 0.625rem 1.75rem;
        background-color: ${theme.colors.button};
        border-radius: 2rem;
        border-style: none;
        display: inline-block;
        cursor: pointer;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 1.125rem;
            padding: 1.25rem 1.75rem;
        }
    }

    .cta-button {
        font-family: ${theme.typography.primaryFontFamily};
        font-size: 0.875rem;
        font-weight: 400;
        color: ${theme.colors.white};
        padding: 0.5rem 1.5rem;
        background-color: ${theme.colors.button};
        border-radius: 2rem;
        border-style: none;
        display: inline-block;
        margin-bottom: ${theme.layout.spaceBetween30};
        cursor: pointer;
        text-decoration: none;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 1rem;
            padding: 0.55rem 2.18rem;
        }
    }

    .payment-button {
        font-family: ${theme.typography.primaryFontFamily};
        font-size: 1rem;
        color: ${theme.colors.white};
        padding: 0.625rem 1.75rem;
        background-color: ${theme.colors.primary};
        border-radius: 2rem;
        border-style: none;
        display: inline-block;
        cursor: pointer;
        text-decoration: none;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            padding: 1rem 1.75rem;
        }
        .bi {
            font-size: 1.125rem;
            margin-right: 0.5rem;
        }
    }
`;
function StyledComponents() {
    return <ComponentsStyle />
}
  
export default StyledComponents;

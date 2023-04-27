import { createGlobalStyle } from 'styled-components';
import theme from '../utils/Variables';

const BaseStyle = createGlobalStyle`
    body {
        font-family: ${theme.typography.primaryFontFamily};
        max-width: 112.5rem;
    }
    h2 {
        color: ${theme.colors.titleH2};
        font-size: 1.375rem;
        font-weight: 400;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 2rem;
        } 
    }
    h3 {
        color: ${theme.colors.titleH2};
        font-size: 1.375rem;
        font-weight: 400;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 1.75rem;
        } 
    }
`;
function StyledBase() {
    return <BaseStyle />
}
  
export default StyledBase;

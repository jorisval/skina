import styled, {keyframes} from 'styled-components';
import theme from '../utils/Variables';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ContactContainer = styled.div`
    animation: ${fadeIn} 1s ease-in;
    .pages-title {
        padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
        padding-bottom: ${theme.layout.spaceBetween10};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
            padding-bottom: ${theme.layout.spaceBetween10};
        }
        h1 {
            color: ${theme.colors.titleH1};
            font-size: 1.25rem;
            font-weight: 800;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.75rem;
            }
            .bi-chevron-double-right {
                font-size: 1rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.375rem;
                }
            }
        }
    }
    .contact-form {
        margin: auto;
        margin-top: ${theme.layout.spaceBetween30};
        margin-bottom: ${theme.layout.spaceBetween30};
        width: 80%;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
        }
        form {
            display: flex;
            flex-direction: column;
            input, textarea {
                font-family: ${theme.typography.primaryFontFamily};
                font-size: 0.9375rem;
                line-height: 1.375rem;
                font-weight: 400;
                color: ${theme.colors.paragraph};
                width: 100%;
                border: 1px ${theme.colors.c4} solid;
                padding: ${theme.layout.spaceBetween10};
                margin-bottom: ${theme.layout.spaceBetween20};
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                }
                &:focus {
                    outline: none;
                }
            }
            .checkbox {
                display: flex;
                align-items: flex-start;
                margin-bottom: ${theme.layout.spaceBetween20};
                #agree {
                    width: initial;
                    height: initial;
                    margin-right: 0.625rem;
                }
                label {
                    font-family: ${theme.typography.primaryFontFamily};
                    font-size: 0.9375rem;
                    line-height: 1.375rem;
                    font-weight: 400;
                    color: ${theme.colors.paragraph};
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1rem;
                    }
                }
            }
            input[type="submit"] {
                font-family: ${theme.typography.primaryFontFamily};
                font-size: 0.875rem;
                font-weight: 400;
                color: ${theme.colors.white};
                padding: 0.375rem 1.625rem;
                background-color: ${theme.colors.button};
                width: unset;
                border-radius: 2rem;
                border-style: none;
                display: inline-block;
                cursor: pointer;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                    padding: 0.55rem 2.18rem;
                }
            }
        }
    }
`;
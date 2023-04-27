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

export const HomeContainer = styled.div`
animation: ${fadeIn} 1s ease-in;
.hero {
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.backgroundColor1};
    margin: 0 -0.5rem;
    @media (min-width: ${theme.breakpoints.up.large}) {
        flex-direction: row;
        justify-content: space-between;
        margin: 0 -8px;
        padding-right: ${theme.layout.spaceBetween60};
        padding-bottom: ${theme.layout.spaceBetween90};
    }
    &__text {
        border-radius: 0.5rem;
        padding: 0.5rem;
        z-index: 2;
        width: 80%;
        margin: auto;
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.large}) {
            padding-top: 8.75rem;
            margin: 0 0 0 ${theme.layout.marginLeftRight};
            width: 40%;
            max-width: 33rem;
            text-align: unset;
            border-radius: 0;
        }
        h1 {
            color: ${theme.colors.white};
            font-size: 1.5rem;
            line-height: 2rem;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 2.375rem;
                line-height: 3.2rem;
                text-align: left;
            }
        }
        .subtitle {
            color: ${theme.colors.white};
            font-size: 1rem;
            line-height: 1.625rem;
            font-weight: 200;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                text-align: left;
            }
        }
        .cta-row {
            display: flex;
            justify-content: center;
            @media (min-width: ${theme.breakpoints.up.large}) {
                justify-content: left;
            }
            .cta-button {
                margin-right: 0.9375rem;
                color: ${theme.colors.white};
                background-color: ${theme.colors.transparent};
                border: 2px solid ${theme.colors.white};
                font-weight: 300;
                &.view {
                    color: ${theme.colors.button};
                    background-color: ${theme.colors.secondary};
                    border: 2px solid ${theme.colors.secondary};
                }
                :hover {
                    color: ${theme.colors.white};
                    background-color: ${theme.colors.button};
                    border: 2px solid ${theme.colors.button};
                }
            }
        }

    }
    &__image {
        margin: auto;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            max-width: 60%;
        }
        @media (min-width: ${theme.breakpoints.up.large}) {
            max-width: 50%;
            padding-top: 8.75rem;
            margin: none;
        }
        img {
            width: 100%;
        }
    }

}
.benefits-one {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row-reverse;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 35%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 60%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        .four-benefits {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            div {
                width: 48%;
                margin-top: 1rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 40%;
                }
                span {
                    font-size: 1.5rem;
                }
                p {
                    margin-top: 0;
                }
                h4 {
                    font-weight: 400;
                    margin: 0.5rem 0;
                }
            }
        }
    }
}
.benefits-two {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
        align-items: center;
    }
    &__image {
        width: 100%;
        margin-bottom: ${theme.layout.spaceBetween20};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 60%;
            max-width: 43.75rem;
        }
        img {
            width: 100%;
        }
    }
    &__text {
        text-align: left;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 35%;
            max-width: 41.25rem;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        .four-benefits {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            div {
                display: flex;
                width: 48%;
                margin: 1.25rem 0;
                span {
                    font-size: 1rem;
                    margin-top: 0.25rem;
                }
                p {
                    margin: 0;
                    margin-left: 0.5rem;
                }
            }
        }
    }
}
.blog {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: ${theme.layout.spaceBetween90};
    &__posts {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__post {
        display: flex;
        width: 80%;
        min-width: 18.75rem;
        margin: 0 1rem ${theme.layout.spaceBetween30} 0;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 30%;
        }
        .image {
            width: 100%;
            min-width: 6.25rem;
            img {
                width: 100%;
            }
        }
        h4 {
            font-weight: 400;
            margin: 0;
        }
        p {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            line-height: 1.5rem;
            margin: 0.5rem 0;
        }
        a {
            color: ${theme.colors.paragraph};
            font-size: 1rem;
            text-decoration: none;
            :hover {
                color: ${theme.colors.secondary};
            }
        }
    }
}
`;
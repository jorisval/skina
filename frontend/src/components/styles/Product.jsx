import styled, { css, keyframes } from 'styled-components';
import theme from '../utils/Variables';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ProductContainer = styled.div`
    animation: ${fadeIn} 0.4s ease-in;
    .product-hero {
        padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
        margin: 0 -0.5rem;
        background-color: ${theme.colors.f6};

        @media (min-width: ${theme.breakpoints.up.small}) {
            display: flex;
        }

        &__part-1 {
            max-width: 30rem;
            margin: auto;

            @media (min-width: ${theme.breakpoints.up.small}) {
                margin: unset;
                margin-right: 0.5rem;
            }

            img {
                width: 100%;
                border-radius: 0.625rem;
            }
        }

        &__part-2 {
            font-size: 1.125rem;
            font-weight: 400;
            margin: auto;

            @media (min-width: ${theme.breakpoints.up.small}) {
                margin: unset;
                font-size: 1.25rem;
                padding-left: 0.605rem;
            }

            @media (min-width: ${theme.breakpoints.up.medium}) {
                padding-left: 1rem;
            }

            > div {
                margin-bottom: ${theme.layout.spaceBetween20};

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: ${theme.layout.spaceBetween30};
                }
            }

            h2 {
                font-size: 1.5rem;
                margin-top: 1rem;
                color: ${theme.colors.primary};

                @media (min-width: ${theme.breakpoints.up.small}) {
                    margin-top: 0.5rem;
                }

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1.875rem;
                }
            }

            .product-title {
                margin-bottom: ${theme.layout.spaceBetween20};

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    margin-bottom: ${theme.layout.spaceBetween30};
                }

                span {
                    color: ${theme.colors.primary};
                    font-size: 1.25rem;
                }
            }

            .option {
                color: ${theme.colors.paragraph};

                p {
                    margin-bottom: 1rem;
                }

                &__case {
                    display: flex;
                    flex-wrap: wrap;

                    div {
                        font-size: 1rem;
                        margin-left: 0.625rem;
                        margin-bottom: 0.375rem;
                        padding: 0.125rem 0.25rem;
                        background-color: ${theme.colors.white};
                        border: 1px ${theme.colors.c4} solid;
                        cursor: pointer;

                        @media (min-width: ${theme.breakpoints.up.medium}) {
                            font-size: 1.125rem;
                            padding: 0.25rem 0.5rem;
                        }
                        &.active {
                            color: ${theme.colors.secondary};
                            border: 1px ${theme.colors.secondary} solid;
                        }
                    }
                }
            }

            .quantity {
                color: ${theme.colors.titleH2};

                label {
                    display: block;
                    font-size: 1.125rem;
                    margin-bottom: 0.5rem;
                    margin-right: 0.625rem;
                }

                button {
                    font-size: 1rem;
                    color: ${theme.colors.paragraph};
                    padding: 0.25rem 0.5rem;
                    border: 1px ${theme.colors.c4} solid;
                    background-color: ${theme.colors.white};
                    cursor: pointer;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1.125rem;
                    }
                }

                input {
                    font-size: 1rem;
                    color: ${theme.colors.paragraph};
                    padding-top: 0.25rem;
                    padding-bottom: 0.25rem;
                    text-align: center;
                    width: 30px;
                    border: 1px ${theme.colors.c4} solid;
                    margin: 0 -0.375rem;

                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        font-size: 1.125rem;
                    }

                    &::-webkit-inner-spin-button {
                        display: none;
                    }

                    &::-webkit-outer-spin-button {
                        display: none;
                    }

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }

    .product-body {
        padding: ${theme.layout.spaceBetween30} ${theme.layout.marginLeftRight};
        color: ${theme.colors.paragraph};
        font-size: 1rem;
        line-height: 1.8rem;

        @media (min-width: ${theme.breakpoints.up.medium}) {
            padding: ${theme.layout.spaceBetween60} ${theme.layout.marginLeftRight};
            width: 70%;
            margin: auto;
        }
    }

    .product-catalog-view {
        margin-bottom: ${theme.layout.spaceBetween90}
        .solid {
            width: 25%;
            margin: auto;
            border-top: 1px ${theme.colors.c4} solid;
            margin-bottom: ${theme.layout.spaceBetween60};
        }
    }
`;

const shimmer = keyframes`
    0% {
        background-position: -40rem 0;
    }
    100% {
        background-position: 40rem 0;
    }
`;

const skeletonBackground = css`
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 40rem 100%;
    animation: ${shimmer} 2s infinite;
`;

export const SkeletonImage = styled.div`
    width: 277px;
    height: 277px;
    border-radius: 0.625rem;
    ${skeletonBackground}
    @media (min-width: 320px) {
        width: 330px;
        height: 330px;
    }
    @media (min-width: 425px) {
        width: 378px;
        height: 378px;
    }
    @media (min-width: 768px) {
        width: 480px;
        height: 480px;
    }
`;

export const SkeletonText = styled.div`
    height: 1rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonButton = styled.div`
    width: 100%;
    height: 2rem;
    margin-bottom: 0.5rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonOption = styled.div`
    width: 100%;
    height: 1rem;
    margin-left: 0.625rem;
    margin-bottom: 0.375rem;
    border-radius: 3px;
    ${skeletonBackground}
`;

export const SkeletonQuantity = styled.div`
    display: flex;
    align-items: center;

    & > div {
        height: 1.5rem;
        border-radius: 3px;
        ${skeletonBackground}

        &:first-child {
            width: 2.5rem;
            margin-right: 0.625rem;
        }

        &:nth-child(2) {
            width: 1rem;
            margin-right: 0.625rem;
        }

        &:last-child {
            width: 2.5rem;
        }
    }
`;

export const SkeletonProductBody = styled.div`
    margin-bottom: 1.5rem;

    & > div {
        height: 1rem;
        margin-bottom: 0.5rem;
        border-radius: 3px;
        ${skeletonBackground}
    }
`;

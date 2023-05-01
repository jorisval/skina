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

const shimmer = keyframes`
    0% {
        background-position: -468px 0;
    }
    100% {
        background-position: 468px 0;
    }
`;

export const SkeletonLoader = styled.div`
    width: 14.375rem;
    height: 18rem;
    border-radius: 0.625rem;
    background-color: ${theme.colors.backgroundColor3};
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 1.5s infinite;
    margin: auto;
    margin-bottom: 2.1875rem;
    padding-bottom: 0.9375rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 16rem;
        height: 25.875rem;
        padding-bottom: 1.875rem;
    }
`;

export const CatalogContainer = styled.div`
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
    .services-section.catalog-services {
        margin: 0 ${theme.layout.marginLeftRight};
        margin-top: ${theme.layout.spaceBetween30}; 
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            margin-top: ${theme.layout.spaceBetween90};
        }
        .services {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            .service {
                width: 14.375rem;
                text-align: center;
                font-weight: 400;
                font-size: 1.125rem;
                padding-bottom: 0.9375rem;
                margin: auto;
                margin-bottom: 1.25rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    width: 16rem;
                    font-size: 1.25rem;
                    padding-bottom: 1.875rem;
                }
                a {
                    text-decoration: none;
                }
                &__image {
                    padding: 0.5rem 0.25rem;
                    background-color: ${theme.colors.backgroundColor3};
                    img {
                        width: 100%;
                    }
                }
                p {
                    color: ${theme.colors.paragraph};
                    font-size: 1.25rem;
                    margin-top: 1rem;
                }
            }
        }
        .product-selected {
            &-circles {
                display: flex;
                justify-content: center;
                margin: auto;
                margin-top: ${theme.layout.spaceBetween10};
                flex-wrap: wrap; /* Allow circles to wrap to the next line if there are many */
                max-width: 100%; 
            }
            &-circle {
                width: 0.75rem;
                height: 0.75rem;
                margin: 0 5px; /* Add spacing on both sides of the circle */
                border: 1px solid ${theme.colors.paragraph};
                background-color: ${theme.colors.backgroundColor3};
                border-radius: 50%; /* Use percentage value for a perfect circle */
                
                &.active {
                    background-color: ${theme.colors.paragraph};
                }
            }
        }
    }
`;
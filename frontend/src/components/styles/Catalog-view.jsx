import styled, { keyframes } from 'styled-components';
import theme from '../utils/Variables';

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
    background-color: #f0f0f0;
    background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 1.5s infinite;
    margin: auto;
    margin-bottom: 2.1875rem;
    padding-bottom: 0.9375rem;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 20rem;
        height: 25.875rem;
        padding-bottom: 1.875rem;
    }
`;

export const CatalogViewContainer = styled.div`
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
        .presentation {
            text-align: left;
            width: 14.375rem;
            background-color: ${theme.colors.backgroundColor3};
            padding-bottom: 0.9375rem;
            margin: auto;
            margin-bottom: 2.1875rem;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                padding-bottom: 1.875rem;
            }
            p {
                font-size: 0.875rem;
                line-height: 1.25rem;
                @media (min-width: ${theme.breakpoints.up.medium}) {
                    font-size: 1rem;
                    line-height: 1.5rem;
                }
            }
        }
        .service {
            width: 14.375rem;
            border-radius: 0.625rem;
            text-align: center;
            font-weight: 400;
            font-size: 1.125rem;
            background-color: ${theme.colors.backgroundColor3};
            padding-bottom: 0.9375rem;
            margin: auto;
            margin-bottom: 2.1875rem;
            position: relative;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 16rem;
                font-size: 1.25rem;
                padding-bottom: 1.875rem;
            }
            a {
                text-decoration: none;
            }
            &__content {
                position: relative;
                z-index: 2;
                margin-bottom: 0.9375rem;
                img {
                    width: 100%;
                    border-radius: 0.625rem 0.625rem 0 0;
                    margin-bottom: 0.9375rem;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        margin-bottom: 1.875rem;
                    }
                }
                p {
                    color: ${theme.colors.titleH2};
                    margin: 0 0 0.5rem;
                    @media (min-width: ${theme.breakpoints.up.medium}) {
                        margin-bottom: 0.5rem;
                    }
                }
                span {
                    color: ${theme.colors.titleH2};
                }
            }
            &__background {
                display: none;
                position: absolute;
                width: 100%;
                height: 70%;
                bottom: 0;
                z-index: 1;
                background-color: ${theme.colors.backgroundColor2};
                border-radius: 0.625rem;
                .add-product {
                    position: absolute;
                    bottom: -0.875rem;
                    left: 45%;
                    padding: 0.25rem 0.6rem;
                    font-size: 1rem;
                    color: ${theme.colors.white};
                    background-color: ${theme.colors.button};
                    border-radius: 5rem;
                    
                }
                &.active {
                    display: block;
                }
            }
        }
    }
`;
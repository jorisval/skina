import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import theme from '../utils/Variables';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LayoutsStyle = createGlobalStyle`
    body {
        font-familly: ${theme.typography.primaryFontFamily};
        background-color: ${theme.colors.backgroundColor3};
    }
    p {
        font-size: 1rem;
    }
    .header {
        animation: ${fadeIn} 1s ease-in;
        display: flex;
        position: relative;
        justify-content: space-between;
        padding: 0 ${theme.layout.marginLeftRight};
        margin: -0.5rem;
        margin-bottom: 0;
        font-size: ${theme.typography.navFontSize};
        .menu-md {
                display: block;

            @media (min-width: ${theme.breakpoints.up.medium}) {
                display: none;
            }

            &__icon {
                width: ${theme.layout.menuTabWidth};
                height: 40px;
                position: absolute;
                z-index: 100;
                top: 0px;
                left: calc(8% + 15px);
                padding-top: 18px;
                cursor: pointer;
                transition: all 0.6s ease-in-out;

            div {
                height: 2px;
                background-color: ${theme.colors.primary};
                display: block;
                margin: 4px;
                transition: all 0.6s ease-in-out;
            }

            &.active {
                left: calc(100vw - ${theme.layout.menuTabWidth});
                transition: all 600ms ease-in-out;
                background-color: ${theme.colors.paragraph};
                position: fixed;

                #icon-bar-one {
                transform: translateY(4px) rotate(-135deg);
                transition: all 0.6s ease-in-out;
                background-color: ${theme.colors.secondary};
                }

                #icon-bar-two {
                opacity: 0;
                transition: 0.4s ease;
                }

                #icon-bar-three {
                transform: translateY(-8px) rotate(-45deg);
                transition: all 0.6s ease-in-out;
                background-color: ${theme.colors.secondary};
                }
            }
            }

            &__hide {
            width: calc(100vw - ${theme.layout.menuTabWidth});
            left: calc(${theme.layout.menuTabWidth} - 100vw);
            height: 100vh;
            position: absolute;
            z-index: 10;
            top: 0px;
            transition: all 0.6s ease-in-out;

            li {
                height: 50px;
                list-style-type: none;
                text-align: center;
                line-height: 50px;
                transition: all 0.5s ease;

                &:hover {
                background-color: ${theme.colors.secondary};
                transition: all 0.5s ease;
                }
            }

            a {
                font-size: 1rem;
                padding: 30px 25px;
                text-decoration: none;
                color: ${theme.colors.white};
                
            }

            &.show {
                left: 0px;
                background-color: ${theme.colors.paragraph};
                transition: all 0.6s ease-in-out;
                position: fixed;
            }
            }
        }

        &__logo {
            margin-right: 0%;
            padding: 20px;
            text-align: center;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                padding-left: 0;
                margin-right: 10%;
            }
            @media (min-width: ${theme.breakpoints.up.large}) {
                margin-right: 30%;
            }
            img {
                width: 80%;
                @media (min-width: ${theme.breakpoints.up.large}) {
                    width: 100%;
                }
            }
        }

        .nav-lg {
            display: none;
            font-size: 0.875rem;
            width: 60%;
            margin-right: 5%;

            @media (min-width: ${theme.breakpoints.up.medium}) {
                display: block;
            }
            @media (min-width: ${theme.breakpoints.up.xlarge}) {
                font-size: 1rem;
                width: 50%;
            }

            ul {
            display: flex;
            list-style-type: none;
            margin: 0px;
            padding: 0px;

            .active {
                a {
                    border-bottom: 2px solid ${theme.colors.secondary};
                }
            }
            }

            li {
            padding: 20px 3%;
            }

            a {
                text-decoration: none;
                color: ${theme.colors.primary};
                padding: 0 0 0.25rem 0;

                &:hover {
                    border-bottom: 2px solid ${theme.colors.secondary};
                }
            }
        }

        &__cart {
            text-align: center;
            padding: 17px 0;
        }

        .bi-cart3 {
            font-size: 1rem;
            color: ${theme.colors.primary};
            cursor: pointer;

            @media (min-width: ${theme.breakpoints.up.xlarge}) {
            font-size: 1.25rem;
            }
        }

        .cart {
            position: absolute;
            z-index: 100;

            .background {
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.8);
            position: fixed;
            top: 0;
            right: 0;
            display: none;
            }

            &-content {
            box-sizing: border-box;
            width: 35%;
            min-width: 280px;
            height: 100vh;
            padding: 0.5rem 1rem;
            background-color: ${theme.colors.white};
            color: ${theme.colors.paragraph};
            position: fixed;
            top: 0;
            left: 100%;
            transition: left 400ms ease;

            &__header {
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding-bottom: 0.375rem;
                border-bottom: 1px ${theme.colors.c4} solid;
                font-size: 0.875rem;

                @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 1rem;
                }
            }

            &-product {
                font-size: 0.875rem;
                display: flex;
                margin-top: 0.9375rem;
                padding-bottom: 0.75rem;
                border-bottom: 1px ${theme.colors.c4} solid;
                width: 100%;

                @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 1rem;
                }

                &__part1 {
                    width: 30%;
                    margin-right: 0.625rem;

                    img {
                        width: 100%;
                        max-width: 6.25rem;
                        border-radius: 0.5rem;
                    }
                }

                &__part2 {
                    width: 70%;
                    margin-right: 0.625rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    &-title {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 0.5rem;
                    }

                    &-option {
                        margin-bottom: 0.5rem;
                    }

                    &-quantity {
                    display: flex;
                    justify-content: space-between;

                    .quantity {
                        color: ${theme.colors.paragraph};

                        button {
                        font-size: 0.875rem;
                        color: ${theme.colors.paragraph};
                        padding: 0.25rem 0.5rem;
                        border: 1px ${theme.colors.c4} solid;
                        background-color: ${theme.colors.white};
                        cursor: pointer;
                        }

                        input {
                        font-size: 0.875rem;
                        color: ${theme.colors.paragraph};
                        padding-top: 0.25rem;
                        padding-bottom: 0.25rem;
                        text-align: center;
                        width: 30px;
                        border: 1px ${theme.colors.c4} solid;
                        margin: 0 -6px;

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

                    .price {
                        padding-top: 0.625rem;
                    }
                    }
                }
                }

                &-subtotal {
                font-size: 0.875rem;
                display: flex;
                justify-content: space-between;
                margin-top: 1.25rem;

                @media (min-width: ${theme.breakpoints.up.large}) {
                    font-size: 1rem;
                }
                }

                &-payment {
                text-align: center;
                margin-top: 1.875rem;
                }

                .price {
                color: ${theme.colors.secondary};
                }

                .bi-x {
                cursor: pointer;
                }

                &.show {
                left: calc(100% - 280px);

                @media all and (min-width: 800px) {
                    left: calc(100% - 35%);
                }
                }
            }
            }
        }
    }
    .header.home {
        background-color: ${theme.colors.backgroundColor1};
        .menu-md {
            &__icon {
                div {
                    background-color: ${theme.colors.white};
                }
            }
        }
        .nav-lg {
            ul {
                a {
                    color: ${theme.colors.nav};
                }
            }
        }
        .bi-cart3 {
            color: ${theme.colors.nav};
        }
    }
    
    
    .footer {
        animation: ${fadeIn} 1s ease-in;
        padding: 0 ${theme.layout.marginLeftRight};
        padding-top: ${theme.layout.spaceBetween30};
        padding-bottom: 1.25rem;
        margin: 0 -0.5rem;
        margin-top: ${theme.layout.spaceBetween90};
        color: ${theme.colors.paragraph};
        border-top: 1px rgba(12, 82, 89, 0.20) solid;
        background-color: ${theme.colors.backgroundColor2};

        &__part-1 {
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-between;
            font-size: 1rem;
            margin-bottom: ${theme.layout.spaceBetween60};

            @media (min-width: ${theme.breakpoints.up.medium}) {
                flex-direction: row;
                flex-wrap: wrap;
                margin-bottom: ${theme.layout.spaceBetween90};
            }

            div {
                padding: 1rem;
            }

            h3 {
                font-size: 1.125rem;
                color: ${theme.colors.titleH3};
                font-weight: 500;
                margin-bottom: 0.625rem;
            }

            ul {
                padding-left: 0;
            }

            li {
                list-style-type: none;
                margin: 0.25rem 0;
            }

            a {
                text-decoration: none;
                color: ${theme.colors.paragraph};

                &:hover {
                    color: ${theme.colors.secondary};
                }
            }

            form {
                display: flex;
                width: 100%;
            }

            input[type="email"] {
                font-size: 0.875rem;
                color: ${theme.colors.paragraph};
                padding: 0.25rem 0.5rem;
                border: 2px ${theme.colors.button} solid;
                border-radius: 2rem 0 0 2rem;
                width: 65%;

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                }
            }

            input[type="submit"] {
                font-size: 0.875rem;
                color: ${theme.colors.white};
                background-color: ${theme.colors.button};
                padding: 0.25rem 0.5rem;
                border: 2px ${theme.colors.button} solid;
                border-radius: 0 2rem 2rem 0;
                margin-left: -5px;

                @media (min-width: ${theme.breakpoints.up.medium}) {
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                }
            }
        }

        &__part-2 {
            font-size: 1rem;

            p {
                margin: 0;
            } 
        }
    }
`;

function StyledLayouts() {
    return <LayoutsStyle />
}

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
    width: 100px;
    height: 100px;
    border-radius: 0.625rem;
    ${skeletonBackground}
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

  
export default StyledLayouts;
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
    }
    &__text {
        border-radius: 0.5rem;
        padding: 0.5rem;
        z-index: 2;
        width: 80%;
        margin: auto;
        text-align: center;
        @media (min-width: ${theme.breakpoints.up.large}) {
            padding-top: 7.5rem;
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
            font-weight: 400;
            margin-bottom: ${theme.layout.spaceBetween30};
            @media (min-width: ${theme.breakpoints.up.large}) {
                font-size: 2rem;
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
            p {
                
            }
        }
        .cta-row {
            font-size: 0.875rem;
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
                    background-color: ${theme.colors.white};
                    border: 2px solid ${theme.colors.white};
                }
                :hover {
                    color: ${theme.colors.white};
                    background-color: ${theme.colors.secondary};
                    border: 2px solid ${theme.colors.secondary};
                }
            }
        }

    }
    &__image {
        margin: auto;
        margin-bottom: -10rem;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            max-width: 60%;
            margin-bottom: -13.75rem;
        }
        @media (min-width: ${theme.breakpoints.up.large}) {
            max-width: 50%;
            padding-top: 7.5rem;
            margin: none;
        }
        img {
            width: 100%;
        }
    }

}
.section-one {
    margin: 0 ${theme.layout.marginLeftRight};
    margin-top: 12rem;
    margin-bottom: ${theme.layout.spaceBetween60};
    text-align: center;
    color: ${theme.colors.paragraph};
    @media (min-width: ${theme.breakpoints.up.medium}) {
        margin-top: 15.75rem;
        margin-bottom: ${theme.layout.spaceBetween90};
    }
    h4 {
        margin-bottom: 0;
    }
    p {
        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }
    &__part2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            flex-direction: row;
        }
        .section-one-2-part1 {
            @media (min-width: ${theme.breakpoints.up.medium}) {
                text-align: right;
            }
        }
        .section-one-2-part2 {
            width: 80%;
            @media (min-width: ${theme.breakpoints.up.medium}) {
                width: 40%;
            }
            img {
                @media (max-width: ${theme.breakpoints.down.medium}) {
                    width: 200px;
                }
            }
        }
        .section-one-2-part3 {
            @media (min-width: ${theme.breakpoints.up.medium}) {
                text-align: left;
            }
        }
    }
}
.section-two {
    padding: 0 ${theme.layout.marginLeftRight};
    margin: 0 -0.5rem;
    margin-top: 12rem;
    margin-bottom: ${theme.layout.spaceBetween60};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: ${theme.colors.secondary};
    @media (min-width: ${theme.breakpoints.up.medium}) {
        flex-direction: row;
        text-align: left;
        margin-top: 13.5rem;
        margin-bottom: 9.375rem;
    }
    &__image {
        width: 100%;
        margin-top: -6rem;
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 50%;
            max-width: 43.75rem;
            margin-bottom: -4rem;
        }
        img {
            @media (max-width: ${theme.breakpoints.down.medium}) {
                width: 200px;
            }
            @media (min-width: ${theme.breakpoints.up.medium}) {
                margin-left: ${theme.layout.spaceBetween60};
            }
        }
    }
    &__text {
        @media (min-width: ${theme.breakpoints.up.medium}) {
            width: 45%;
            max-width: 41.25rem;
        }
        h3 {
            font-size: 1.125rem;
            color: ${theme.colors.white};
            margin-bottom: ${theme.layout.spaceBetween10};
            @media (min-width: ${theme.breakpoints.up.medium}) {
                font-size: 1.25rem;
            }
        }
        p {
            color: ${theme.colors.white};
            font-size: 1rem;
            line-height: 1.625rem;
            margin-top: 0;
            margin-bottom: ${theme.layout.spaceBetween20};
        }
        .cta-button {
            color: ${theme.colors.primary};
            background-color: ${theme.colors.white};
            border: 2px solid ${theme.colors.white};
            :hover {
                color: ${theme.colors.white};
                background-color: ${theme.colors.secondary};
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
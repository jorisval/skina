import styled from "styled-components";
import theme from "../utils/Variables";
import errorImage from "../../assets/images/404-error-pana.svg";

const PageErrorContainer = styled.div`
    margin: ${theme.layout.spaceBetween90} ${theme.layout.marginLeftRight};
    text-align: center;
`;

const PageErrorTitle = styled.div`
    h1 {
        color: ${theme.colors.titleH1};
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: ${theme.layout.spaceBetween30};
        @media (min-width: ${theme.breakpoints.up.medium}) {
            font-size: 2rem;
        }
    }
`;

const PageErrorImage = styled.div`
    width: 100%;
    margin: auto;
    @media (min-width: ${theme.breakpoints.up.medium}) {
        width: 50%;
        max-width: 43.75rem;
    }
    img {
        width: 100%;
    }
`;


function Error404() {
    
    return(
        <PageErrorContainer>
            <PageErrorTitle>
                <h1>Ooooops La page que vous recherchez n'existe pas !</h1>
            </PageErrorTitle>
            <PageErrorImage>
                <img src={errorImage} alt="" />
            </PageErrorImage>
        </PageErrorContainer>
    );
}

export default Error404;
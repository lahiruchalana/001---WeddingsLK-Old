import styled from "styled-components"


const Footer = (props) => {
    return (
        <Nav>
            <FooterLogo>
                <img src= "./images/Logo_WeddingsLK.png"/>
            </FooterLogo>
        </Nav>
    );
};

const Nav = styled.nav`
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    letter-spacing: 2px;
    z-index: 3;
`;

const FooterLogo = styled.div`

    img {
        background-color: aliceblue;
        padding: 0;
        width: 170px;
        max-height: 75px;
        font-size: 0;
        display: inline-block;
    }
`;

export default Footer;

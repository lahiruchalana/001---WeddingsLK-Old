
import styled from "styled-components";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = (props) => {
    return (
       <Nav>
            <HeaderLogo>
                <a href= '/'></a>
                <img src= "./images/Logo_WeddingsLK.png"/> 
            </HeaderLogo>
            <HeaderNav>
                {/* TODO -- make drop down here */}
                <a href= '/'>
                    <span>WEDDING PLANS</span>
                </a>
                <a href= '/'>
                    <span>SERVICES</span>
                </a>
                <a href= '/'>
                    <span>VENDORS</span>
                </a>
                <a href= '/'>
                    <span>SHOPS</span>
                </a>
                <a href= '/'>
                    <span>GALLERIES</span>
                </a>
                <a href= '/'>
                    <span>ABOUT</span>
                </a>
                <a href= '/'>
                    <span>WEDDING WEBSITES</span>
                </a>
                <a href= '/invitation'>
                    <span>INVITATION CARDS</span>
                </a>
            </HeaderNav>
            <HeaderSearch>
                <a href= '/'>
                    <input className= "header__searchInput" type= "text"/>
                </a>
            </HeaderSearch>
            <HeaderNavIcon>
                <a href= '/'>
                <span>LogIn</span>
                </a>
                <a href= '/'>
                <span>SignUp</span>
                </a>
            </HeaderNavIcon>
            <HeaderProfile>
                <a href= '/'>
                   <img src="/images/User_Icon.png"/>
                </a>
            </HeaderProfile>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: o;
    left: 0;
    right: 0;
    height: 70px;
    background-color: rgb(82, 99, 93);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    letter-spacing: 2px;
    z-index: 3;
`;



const HeaderNavIcon = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 10px;
    
    a{
        color: white;
        text-decoration: none;
        font-size: 10px;
        margin: 3px;
        border: 1px solid white;
        padding: 5px;
    }
`;

const HeaderSearch = styled.div`
    a {
        input {
        
        }

    }
`;

const HeaderProfile = styled.div`
  img {
      width: 20px;
      height: auto;
  }
`;
//  a {
//     color: white;
//     text-decoration: none;
//   }
  
const HeaderLogo = styled.div`
    img{
        background-color: aliceblue;
        padding-top: 5px;
        width: 180px;
        max-height: 80px;
        font-size: 0;
        display: inline-block;
    }
`;

const  HeaderNav = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

  
    a {
        color: white;
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0 12px;

  
        span {
            color: white;
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;

  
            &:before {
                background-color: white;
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }  

        &:hover {
            span:before {
            transform: scaleX(1);
            visibility: visible;
            opacity: 1 !important;
            z-index: 5;
            }
        } 
    }

    @media (max-width: 768px) {
        display: none;
    }
`;



export default Header;
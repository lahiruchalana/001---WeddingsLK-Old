import React from 'react'
import './Header.css'


function Header() {
    return (
        // Header starts here 
        <nav className= 'header' >

            {/* header__logo */}
            <a href= '/'>
                <img className= "header__logo"
                src= "./images/Logo_WeddingsLK.png"/> 
            </a>

            <div className= "header__nav">
                {/* header__weddingPlans */}
                {/* TODO make drop down here */}
                <div className= 'header__navOption'>
                    <a href= '/'>
                        <span className= "header__weddingPlans">WEDDING PLANS</span>
                    </a>
                </div>
                {/* header__services */}
                {/* TODO make drop down here */}
                <div className= 'header__navOption'>
                    <a href= '/'>
                        <span className= "header__services">SERVICES</span>
                    </a>
                </div>
                {/* header__vendors */}
                <div className= 'header__navOption'>
                <a href= '/'>
                        <span className= "header__vendors">VENDORS</span>
                    </a>
                </div>
                {/* header__shops */}
                <div className= 'header__navOption'>
                <a href= '/'>
                        <span className= "header__shops">SHOPS</span>
                    </a>
                </div>
                {/* header__galleries */}
                <div className= 'header__navOption'>
                <a href= '/'>
                        <span className= "header__galleries">GALLERIES</span>
                    </a>
                </div>
                {/* header__about */}
                <div className= 'header__navOption'>
                <a href= '/'>
                        <span className= "header__about">ABOUT</span>
                    </a>
                </div>
                {/* header__weddingWebsites */}
                <div className= 'header__navOption'>
                <a href= '/'>
                        <span className= "header__weddingWebsites">WEDDING WEBSITES</span>
                    </a>
                </div>
                {/* header__invitationCards */}
                <div className= 'header__navOption'>
                <a href= '/'>
                        <span className= "header__invitationCards">INVITATION CARDS</span>
                    </a>
                </div>

            </div>

            <div className= 'header__navIcon'>
                {/* header__logIn */}
                <div className= 'header__navIconOption'>
                    <a href= '/'>
                        <span className= "header__logIn">Log In</span>
                    </a>
                </div>
                {/* header__singUp */}
                <div className= 'header__navIconOption'>
                    <a href= '/'>
                        <span className= "header__signUp">Sign Up</span>
                    </a>
                </div>
                {/* header__search */}
                <div className= "header__navIconOption">
                    <a href= '/'>
                        <input className= "header__searchInput" type= "text"/>
                    </a>
                </div> 
                {/* header__profile */}
                {/* TODO Add icon here also add a icon for search bar */}
                <div className= 'header__navIconOption'>
                    <a href= '/'>
                        <span className= "header__profile">PROFILE</span>
                    </a>
                </div> 
            </div>

            
        </nav>
        // Header ends here
    )
}

export default Header

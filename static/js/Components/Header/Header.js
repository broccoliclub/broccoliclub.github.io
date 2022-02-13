import React from "react";
import Logo from "../../assets/images/logo.png";
import HeadSocialIcon1 from "../../assets/images/head-social-icon1.png";
import HeadSocialIcon2 from "../../assets/images/head-social-icon2.png";
import HeadSocialIcon3 from "../../assets/images/head-social-icon3.png";
import MenuIcon from "../../assets/images/menu-icon.png";
import Xpng from "../../assets/images/x.png";
import {
    useNavigate
} from "react-router-dom";

const Header = (props) => {
    let history = useNavigate();

    const gotohomepage = () => {
        history("/");
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };
    return ( <
        div className = "main-header header_container" >
        <
        div className = "main-header-inn" >
        <
        div className = "logo" >
        <
        img src = {
            Logo
        }
        alt = ""
        width = {
            250
        }
        onClick = {
            gotohomepage
        }
        /> <
        /div> <
        div className = "logo-social" >
        <
        a href = "https://opensea.io/collection/inu-kings-club"
        target = "_blank"
        rel = "noreferrer" >
        <
        img src = {
            HeadSocialIcon1
        }
        alt = "" / >
        <
        /a> <
        a href = "https://discord.com/invite/e7pFCKzbnd"
        target = "_blank"
        rel = "noreferrer" >
        <
        img src = {
            HeadSocialIcon2
        }
        alt = "" / >
        <
        /a> <
        a href = "https://twitter.com/inukings/"
        target = "_blank"
        rel = "noreferrer" >
        <
        img src = {
            HeadSocialIcon3
        }
        alt = "" / >
        <
        /a> <
        /div> <
        div className = "head-menu" >
        <
        nav className = "nav" >
        <
        input type = "checkbox"
        id = "nav__checkbox"
        className = "nav__checkbox" /
        >
        <
        label htmlFor = "nav__checkbox"
        className = "nav__toggle" >
        <
        img src = {
            MenuIcon
        }
        className = "hamburger"
        alt = "" / >
        <
        img src = {
            Xpng
        }
        className = "close"
        alt = "" / >
        <
        /label>

        <
        ul className = "nav__menu" >
        <
        li > {
            props.fromwhere === "MintNFT" ||
            props.fromwhere === "collection" ? ( <
                p onClick = {
                    gotohomepage
                }
                className = "js-anchor-link" >
                About <
                /p>
            ) : ( <
                p onClick = {
                    props.scrollToabout
                }
                className = "js-anchor-link" >
                About <
                /p>
            )
        } <
        /li> <
        li > {
            props.fromwhere === "MintNFT" ||
            props.fromwhere === "collection" ? ( <
                p onClick = {
                    gotohomepage
                }
                className = "js-anchor-link" >
                FAQ <
                /p>
            ) : ( <
                p onClick = {
                    props.scrollTofaq
                }
                className = "js-anchor-link" >
                FAQ <
                /p>
            )
        } <
        /li> <
        li > {
            props.fromwhere === "MintNFT" ||
            props.fromwhere === "collection" ? ( <
                p onClick = {
                    gotohomepage
                }
                className = "js-anchor-link" >
                Roadmap <
                /p>
            ) : ( <
                p onClick = {
                    props.scrollToroadmap
                }
                className = "js-anchor-link" >
                Roadmap <
                /p>
            )
        } <
        /li> {
            props.fromwhere === "MintNFT" ? null : ( <
                li >
                <
                p onClick = {
                    () => {
                        history("/launch");
                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                }
                className = "js-anchor-link head-menu-connect" >
                 <
                br / >
                <
                span > WALLET < /span> <
                /p> <
                /li>
            )
        } <
        li >
        <
        a href = "https://twitter.com/inukings/"
        target = "_blank"
        rel = "noreferrer"
        className = "js-anchor-link head-menu-join" >
        JOIN US <
        /a> <
        /li> <
        /ul> <
        /nav> <
        /div> <
        div className = "clearfix" > < /div> <
        /div> <
        /div>
    );
};

export default Header;
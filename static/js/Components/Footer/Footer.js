import React from "react";
import Logo from "../../assets/images/logo.png";
import FooterSocialIcon1 from "../../assets/images/footer-social-icon1.png";
import FooterSocialIcon2 from "../../assets/images/footer-social-icon2.png";
import FooterSocialIcon3 from "../../assets/images/footer-social-icon3.png";

const Footer = () => {
    return ( <
        div className = "main-footer" >
        <
        div className = "footer-logo" >
        <
        img src = {
            Logo
        }
        alt = ""
        width = {
            260
        }
        /> <
        /div> <
        div className = "footer-social" >
        <
        a href = "https://twitter.com/club_cranky/"
        target = "_blank"
        rel = "noreferrer" >
        <
        img src = {
            FooterSocialIcon1
        }
        alt = ""
        width = {
            155
        }
        /> <
        /a> <
        a href = "#"
        target = "_blank"
        rel = "noreferrer" >
        <
        img src = {
            FooterSocialIcon2
        }
        alt = ""
        width = {
            155
        }
        /> <
        /a> <
        a href = "https://discord.gg/PrQ2ajhaqt"
        target = "_blank"
        rel = "noreferrer" >
        <
        img src = {
            FooterSocialIcon3
        }
        alt = ""
        width = {
            155
        }
        /> <
        /a> <
        /div> <
        div className = "footer-menu" >
        &
        copy; 2022 Cranky Crocodile Club & nbsp; | & nbsp; All Rights Reserved <
        /div> <
        /div>
    );
};

export default Footer;
import React, {
    useState
} from "react";
import RoadMapPercentImag1 from "../../assets/images/roadmap-percent-img1.png";
import RoadMapPercentImag2 from "../../assets/images/roadmap-percent-img2.png";
import RoadMapPercentImag3 from "../../assets/images/roadmap-percent-img3.png";
import RoadMapPercentImag4 from "../../assets/images/roadmap-percent-img4.png";
import Gallery147png from "../../assets/images/gallery/147.png";
import Gallery139png from "../../assets/images/gallery/139.png";
import Gallerytribspng from "../../assets/images/gallery/Mr.Tribbs.png";
import Galleryayzeekspng from "../../assets/images/gallery/Ayzeek.png";
import Gallerycrudgepng from "../../assets/images/gallery/Crudge.png";
import Galleryechantresspng from "../../assets/images/gallery/Enchantress.png";
import Galleryfrohopng from "../../assets/images/gallery/Froho.png";
import Gallerysitarrpng from "../../assets/images/gallery/Sitarr.png";
import Inu_vfxcartoon from "../../assets/images/inu_vfxcartoon.png";
import Inu_vfxleftbg from "../../assets/images/inu_vfxleftbg.png";
import Inu_vfxrightbg from "../../assets/images/inu_vfxrightbg.png";
// import VFX_INU from "../../assets/images/INU_VFX.png";
import Earn_King from "../../assets/images/earn_king_card2.png";

const LowerBody = (props) => {
    const [panelheight1, setpanelheight1] = useState(false);
    const [panelheight2, setpanelheight2] = useState(false);
    const [panelheight3, setpanelheight3] = useState(false);
    const [panelheight4, setpanelheight4] = useState(false);
    const [panelheight5, setpanelheight5] = useState(false);
    const [panelheight6, setpanelheight6] = useState(false);
    const [panelheight7, setpanelheight7] = useState(false);
    const [panelheight8, setpanelheight8] = useState(false);

    return ( <
        div > { /* <!-- Roadmap --> */ } <
        div ref = {
            props.roadmapRef
        }
        /> <
        div className = "roadmap-main"
        id = "roadmap" >
        <
        div className = "padding-top-bottom-80" >
        <
        div className = "container" >
        <
        h2 > Roadmap Activations < /h2> <
        div className = "roadmap-description" >
        We are creating a community wallet which will be used to maximize the growth of our community
        while also rewarding our early adopters.We will use these community funds
        for future integrations as well as giveaways and more. <
        /div>

        <
        div className = "roadmap-content" >
        <
        div className = "roadmap-content-rpt roadmap-content-1" >
        <
        div className = "roadmap-content-col1 roadmap-emptybox" >
        &
        nbsp; <
        /div> <
        div className = "roadmap-content-col2" >
        <
        div className = "roadmap-content-col2-inn" >
        <
        img src = {
            RoadMapPercentImag1
        }
        alt = "" / >
        <
        /div> <
        /div> <
        div className = "roadmap-content-col3" >
        <
        span >
        When 25 % of the Inu Kings sell out, we will integrate with RarityTools to
        let you see how rare your NFT is and compare
        all of the traits. <
        /span> <
        /div> <
        div className = "clearfix" > < /div> <
        /div>

        <
        div className = "roadmap-content-rpt roadmap-content-2" >
        <
        div className = "roadmap-content-col1" >
        <
        span >
        We will set up the liquidity pool on the NFT20.io platform <
        /span> <
        /div> <
        div className = "roadmap-content-col2" >
        <
        div className = "roadmap-content-col2-inn" >
        <
        img src = {
            RoadMapPercentImag2
        }
        alt = "" / >
        <
        /div> <
        /div> <
        div className = "roadmap-content-col3 roadmap-emptybox" >
        &
        nbsp; <
        /div> <
        div className = "clearfix" > < /div> <
        /div>

        <
        div className = "roadmap-content-rpt roadmap-content-3" >
        <
        div className = "roadmap-content-col1 roadmap-emptybox" >
        &
        nbsp; <
        /div> <
        div className = "roadmap-content-col2" >
        <
        div className = "roadmap-content-col2-inn" >
        <
        img src = {
            RoadMapPercentImag3
        }
        alt = "" / >
        <
        /div> <
        /div> <
        div className = "roadmap-content-col3" >
        <
        span >
        We will launch our InuKings.com Shop URL where owners can order full sized canvas prints, coffee mugs, wall art and other merch with their Inu Kings NFT intellectual property(IP) and can also share this URL and earn upto 50 %
        commission on each sale of merchandise featuring their Inu Kings IP. <
        /span> <
        /div> <
        div className = "clearfix" > < /div> <
        /div>

        <
        div className = "roadmap-content-rpt roadmap-content-4" >
        <
        div className = "roadmap-content-col1" >
        <
        span >
        Once all Inu Kings sell out, all Inu Kings NFT holders will be eligible to claim an Inu Queens NFT
        for no additional cost, you 'll just pay gas. After 12 months, all holders of
        an Inu Queen NFT will be eligible to claim an Inu Puppies NFT
        for free, you 'll just pay the gas <
        /span> <
        /div> <
        div className = "roadmap-content-col2" >
        <
        div className = "roadmap-content-col2-inn" >
        <
        img src = {
            RoadMapPercentImag4
        }
        alt = "" / >
        <
        /div> <
        /div> <
        div className = "roadmap-content-col3 roadmap-emptybox" >
        &
        nbsp; <
        /div> <
        div className = "clearfix" > < /div> <
        /div> <
        /div>

        {
            /* <div className="roadmap-description">
                          For every 12 month holding period that an owner owns both a Inu
                          King NFT and a Inu Queen NFT, they will be eligible to claim a Inu
                          Puppies NFT.
                        </div> */
        } <
        /div> <
        /div> <
        /div> { /* <!-- Roadmap --> */ }

        { /* Earn $King INU  */ }

        <
        div className = "earnking_inu" >
        <
        div className = "container" >
        <
        div className = "earnking_inuinner" >
        <
        div className = "earnking_inuinnerleft" >
        <
        img alt = "earn_king_image"
        src = {
            Earn_King
        }
        /> <
        /div> <
        div className = "earnking_inuinnerright" >
        <
        h3 > EARN $KINGS COINS < /h3> <
        p >
        We will deploy a new smart contract which will allow members to stake their Inu Kings Club NFTs and earn $KINGS coin / token on a daily / weekly basis.the $KINGS coin / token will form the basis of
        our P2E metaverse card game(based on Texas Holdem). <
        /p> <
        /div> <
        /div> <
        /div> <
        /div>

        { /* Earn $King INU  */ }

        { /* Inu VFX */ }

        {
            /* <div>
                    <img src={VFX_INU} alt="inu_vfx" />
                  </div> */
        } <
        div className = "inu_vrxcontainer" >
        <
        div className = "inu_vrxcontainerleft" >
        <
        img alt = "inu_vfx"
        src = {
            Inu_vfxleftbg
        }
        /> <
        div className = "inu_vrxtextcontainer" >
        <
        h3 > 3 D VRX INU KINGS NFT < /h3> <
        p >
        Inu Kings Club NFT Holders will gain exclusive access and priority on the launch of our 3 D VRX Inu Kings NFTs which will be compatible with leading metaverse platforms including Sandbox,
        Metakey and Uniqly.io. <
        /p> <
        /div> <
        /div> <
        div className = "inu_vrxcontainerright" >
        <
        div className = "inu_vrxcontainerright_left" >
        <
        img alt = "inu_vfx"
        src = {
            Inu_vfxcartoon
        }
        width = {
            "100%"
        }
        /> <
        /div> <
        div className = "inu_vrxcontainerright_right" >
        <
        img alt = "inu_vfx"
        src = {
            Inu_vfxrightbg
        }
        width = {
            "100%"
        }
        /> <
        /div> <
        /div> <
        /div>

        { /* Inu VFX */ }

        { /* <!-- Round Table --> */ } <
        div className = "padding-top-bottom-80 round-table text-center" >
        <
        div className = "container" >
        <
        h2 > Knights of the Round Table < /h2> <
        div className = "round-table-mid" >
        <
        div className = "round-table-box" >
        <
        div className = "round-table-box-inn" >
        <
        div className = "round-table-box-img" >
        <
        img src = {
            Gallery147png
        }
        alt = "" / >
        <
        /div> <
        h4 > ADAMR < /h4> <
        h5 > Art Director < /h5> <
        /div> <
        /div> <
        div className = "round-table-box" >
        <
        div className = "round-table-box-inn" >
        <
        div className = "round-table-box-img" >
        <
        img src = {
            Gallery139png
        }
        alt = "" / >
        <
        /div> <
        h4 > SANTOPA < /h4> <
        h5 > Lead Developer & Tech < /h5> <
        /div> <
        /div> <
        div className = "round-table-box" >
        <
        div className = "round-table-box-inn" >
        <
        div className = "round-table-box-img" >
        <
        img src = {
            Galleryfrohopng
        }
        alt = "" / >
        <
        /div> <
        h4 > MR.FROHO < /h4> <
        h5 > Marketing Lead < /h5> <
        /div> <
        /div> <
        div className = "round-table-box" >
        <
        div className = "round-table-box-inn" >
        <
        div className = "round-table-box-img" >
        <
        img src = {
            Gallerytribspng
        }
        alt = "" / >
        <
        /div> <
        h4 > MR.TRIBBS < /h4> <
        h5 > Marketing Oracle < /h5> <
        /div> <
        /div> <
        div className = "round-table-box" >
        <
        div className = "round-table-box-inn" >
        <
        div className = "round-table-box-img" >
        <
        img src = {
            Gallerycrudgepng
        }
        alt = "" / >
        <
        /div> <
        h4 > CRUDGE < /h4> <
        h5 > Discord Overload < /h5> <
        /div> <
        /div> <
        div className = "round-table-box" >
        <
        div className = "round-table-box-inn" >
        <
        div className = "round-table-box-img" >
        <
        img src = {
            Gallerysitarrpng
        }
        alt = "" / >
        <
        /div> <
        h4 > SITARR < /h4> <
        h5 > Graphics Specialist < /h5> <
        /div> <
        /div> <
        div className = "round-table-box" >
        <
        div className = "round-table-box-inn" >
        <
        div className = "round-table-box-img" >
        <
        img src = {
            Galleryechantresspng
        }
        alt = "" / >
        <
        /div> <
        h4 > ECHANTRESS < /h4> <
        h5 > Marketing Wizard < /h5> <
        /div> <
        /div> <
        div className = "round-table-box" >
        <
        div className = "round-table-box-inn" >
        <
        div className = "round-table-box-img" >
        <
        img src = {
            Galleryayzeekspng
        }
        alt = "" / >
        <
        /div> <
        h4 > AYZEE < /h4> <
        h5 > Design Master < /h5> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> { /* <!-- Round Table --> */ }

        { /* FAQ  */ } <
        div ref = {
            props.faqRef
        }
        />

        <
        div className = "roadmap-main" >
        <
        div className = "padding-top-bottom-80" >
        <
        div className = "container faq-main" >
        <
        h2 > FAQ < /h2> <
        div className = "roadmap-description" >
        The Inu Kings Club is a collection of 10, 000 unique imperial Inu King NFTs that live on the ETH blockchain(ERC - 721) and are hosted on IPFS.With more than 220 traits, each Inu King is algorithmically created with its own unique name and characteristics. <
        /div> <
        div className = "faq-content" >
        <
        button className = {
            panelheight1 ? "accordion active" : "accordion"
        }
        onClick = {
            () => setpanelheight1(!panelheight1)
        } >
        <
        span className = "faq-title" > Who are the developers ? < /span> <
        /button> <
        div className = "panel"
        style = {
            {
                maxHeight: panelheight1 ? "500px" : "0"
            }
        } >
        <
        p >
        The Inu Kings Club developers are a team of 9 individuals who come from a variety of different backgrounds including entrepreneurship, marketing, graphic design, web developers,
        IT, coding, cryptocurrency and gaming. <
        /p> <
        /div> <
        /div> <
        div className = "faq-content" >
        <
        button className = {
            panelheight2 ? "accordion active" : "accordion"
        }
        onClick = {
            () => setpanelheight2(!panelheight2)
        } >
        <
        span className = "faq-title" >
        What are the benefits of holding an Inu Kings NFT ?
        <
        /span> <
        /button> <
        div className = "panel"
        style = {
            {
                maxHeight: panelheight2 ? "500px" : "0"
            }
        } >
        <
        p >
        Once all Inu Kings are minted, all NFT holders will receive an Inu Queen NFT free of charge, you 'll just pay the gas. After
        12 months, all holders of both an Inu King and Inu Queen NFT will be eligible to receive an Inu Puppies NFT
        for free,
        you 'll just pay the gas. <
        br / > Inu Kings Club NFT Holders will gain exclusive access and priority on the launch of our 3 D VRX Inu Kings NFTs which will be compatible with leading metaverse platforms including Sandbox, MetaKey and Uniqly.io. <
        /p> <
        /div> <
        /div> <
        div className = "faq-content" >
        <
        button className = {
            panelheight3 ? "accordion active" : "accordion"
        }
        onClick = {
            () => setpanelheight3(!panelheight3)
        } >
        <
        span className = "faq-title" > How Can I Mint ? < /span> <
        /button> <
        div className = "panel"
        style = {
            {
                maxHeight: panelheight3 ? "500px" : "0"
            }
        } >
        <
        p >
        You can mint directly on our website
        while pre - sale is going on.Inu Kings may sell out from time to time, but you can always check twitter or discord to be kept in the loop when we release more.All you need to do is connect your metamask
        wallet to our website https : //inukings.com/ and mint directly
        from our official website
        for .05 ETH. <
        /p> <
        /div> <
        /div> <
        div className = "faq-content" >
        <
        button className = {
            panelheight4 ? "accordion active" : "accordion"
        }
        onClick = {
            () => setpanelheight4(!panelheight4)
        } >
        <
        span className = "faq-title" >
        What will you do
            for the community ?
            <
            /span> <
            /button> <
            div
        className = "panel"
        style = {
            {
                maxHeight: panelheight4 ? "500px" : "0"
            }
        } >
        <
        p >
        We will also be creating a community wallet which will be used to maximize the growth of our community
        while also rewarding our early adopters.We will use these community funds
        for future integrations as well as giveaways and more. <
        /p> <
        /div> <
        /div> <
        div className = "faq-content" >
        <
        button className = {
            panelheight5 ? "accordion active" : "accordion"
        }
        onClick = {
            () => setpanelheight5(!panelheight5)
        } >
        <
        span className = "faq-title" > How unique are Inu Kings ? < /span> <
        /button> <
        div className = "panel"
        style = {
            {
                maxHeight: panelheight5 ? "500px" : "0"
            }
        } >
        <
        p >
        Inu Kings consist of over 220 traits, with some traits more rare than others.Each Inu Kings Club NFT is completely unique. <
        /p> <
        /div> <
        /div> <
        div className = "faq-content" >
        <
        button className = {
            panelheight6 ? "accordion active" : "accordion"
        }
        onClick = {
            () => setpanelheight6(!panelheight6)
        } >
        <
        span className = "faq-title" >
        What is the mint price
        for an Inu Kings Club NFT ?
        <
        /span> <
        /button> <
        div className = "panel"
        style = {
            {
                maxHeight: panelheight6 ? "500px" : "0"
            }
        } >
        <
        p > Inu Kings Club mint cost is 0.05 ETH + gas. < /p> <
        /div> <
        /div> <
        div className = "faq-content" >
        <
        button className = {
            panelheight7 ? "accordion active" : "accordion"
        }
        onClick = {
            () => setpanelheight7(!panelheight7)
        } >
        <
        span className = "faq-title" > Can I mint on my phone ? < /span> <
        /button> <
        div className = "panel"
        style = {
            {
                maxHeight: panelheight7 ? "500px" : "0"
            }
        } >
        <
        p >
        Yes, you just need to download the official Metamask app on the App Store or Google Play store, then go to https : //inukings.com from the browser search within the
        metamask app to connect your wallet, then you can mint!
        <
        /p> <
        /div> <
        /div> <
        div className = "faq-content" >
        <
        button className = {
            panelheight8 ? "accordion active" : "accordion"
        }
        onClick = {
            () => setpanelheight8(!panelheight8)
        } >
        <
        span className = "faq-title" >
        When will Inu Kings Club launch ?
        <
        /span> <
        /button> <
        div className = "panel"
        style = {
            {
                maxHeight: panelheight8 ? "500px" : "0"
            }
        } >
        <
        p >
        Inu Kings Club is set to launch on December 21 st, 2021
        for pre - sale.Public mint date TBA. <
        /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>

        { /* FAQ  */ } <
        /div>
    );
};

export default LowerBody;
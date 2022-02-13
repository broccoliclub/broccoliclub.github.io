import React, {
    useRef
} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UpperBody from "./UpperBody";
import LowerBody from "./LowerBody";

const HomePage = () => {
    //------------------------->Storing position of div ref
    const aboutRef = useRef(null);
    const faqRef = useRef(null);
    const roadmapRef = useRef(null);

    const scrollToabout = () => {
        aboutRef.current ? .scrollIntoView({
            behavior: "smooth"
        });
    };
    const scrollTofaq = () => {
        faqRef.current ? .scrollIntoView({
            behavior: "smooth"
        });
    };
    const scrollToroadmap = () => {
        roadmapRef.current ? .scrollIntoView({
            behavior: "smooth"
        });
    };
    return ( <
        div > { /* <!-- Header --> */ } <
        Header scrollToabout = {
            scrollToabout
        }
        scrollTofaq = {
            scrollTofaq
        }
        scrollToroadmap = {
            scrollToroadmap
        }
        /> { /* <!-- Header --> */ }

        { /* <!-- UpperBody --> */ } <
        UpperBody aboutRef = {
            aboutRef
        }
        /> { /* <!-- UpperBody --> */ }

        { /* <!-- LowerBody --> */ } <
        LowerBody roadmapRef = {
            roadmapRef
        }
        faqRef = {
            faqRef
        }
        /> { /* <!-- LowerBody --> */ }

        { /* <!-- Footer --> */ } <
        Footer / > { /* <!-- Footer --> */ } <
        /div>
    );
};

export default HomePage;
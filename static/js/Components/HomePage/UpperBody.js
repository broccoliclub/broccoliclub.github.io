import React, {
    useEffect,
    useState
} from "react";
import HeroImg from "../../assets/images/hero-img.png";
import SpinImage from "../../assets/images/spin-image.png";
import CollectionSeeMore from "../../assets/images/collection-seemore.png";
import Chapter1 from "../../assets/images/chaper-1.png";
import Chapter2 from "../../assets/images/chaper-2.png";
import Chapter3 from "../../assets/images/chaper-3.png";
import Chapter4 from "../../assets/images/chaper-4.png";
import WhatisInukingMid from "../../assets/images/what-is-inuking-mid.png";
import WhatisRightImg from "../../assets/images/what-is-right-img.png";
import {
    useNavigate
} from "react-router-dom";
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
    makeStyles
} from "@material-ui/core/styles";
import axios from "axios";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const UpperBody = (props) => {
    const history = useNavigate();
    const [mintAmount, setMintAmount] = useState(1);
    const [smartcontract, setsmartcontract] = useState();
    const [newWeb3, setweb3] = useState();
    const [blockchainaccount, setblockchainaccount] = useState();
    const [maxInuPurchase, setmaxInuPurchase] = useState(20);
    const [maxinu, setmaxinu] = useState(10000);
    const [availableforsale, setavailableforsale] = useState(0);
    // const [totalavailableinu, settotalavailableinu] = useState();
    const [InuPrice, setInuPrice] = useState(30000000000000000);
    const [error, seterror] = useState("Cranky Crocodile Club");
    const [backdropopen, setbackdropopen] = useState(false);
    const classes = useStyles();
    const [modalopen, setmodalOpen] = useState(false);
    const [availableinuloader, setavailableinuloader] = useState(true);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const abiResponse = await fetch("/config/abi.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const abi = await abiResponse.json();
        let data2 = {
            maxInus: 200,
            totalSupply: 30,
        };
        axios.post(
            "https://rf2m4m72z6.execute-api.us-east-2.amazonaws.com/v1/getAvailableForSale",
            data2
        );
        let provider = window.ethereum;
        if (typeof provider !== "undefined") {
            // metamask is installed
            Web3EthContract.setProvider(provider);
            // eslint-disable-next-line
            let web3 = new Web3(provider);
            setweb3(web3);

            provider.request({
                method: "eth_requestAccounts"
            }).then((accounts) => {
                let selectedAcc = accounts[0];
                setblockchainaccount(selectedAcc);
            });
            provider
                .request({
                    method: "net_version",
                })
                .then((res) => {
                    if (Number(res) === 1) {
                        seterror(null);
                        const SmartContractObj = new Web3EthContract(
                            abi,
                            "0x2bB935B5E09e577E54C69Ae448cD0582884B4b8E"
                        );
                        setsmartcontract(SmartContractObj);

                        //Checking if sale is active or not
                        SmartContractObj.methods
                            .saleIsActive()
                            .call()
                            .then((res) =>
                                seterror(res ? null : "Pre-Sale is over, 0 inu available")
                            );

                        //Getting of amount maximum number inus to be purchased by individual
                        SmartContractObj.methods
                            .maxInuPurchase()
                            .call()
                            .then((res) => setmaxInuPurchase(res));

                        //Getting of total number of inus present in blockchain
                        SmartContractObj.methods
                            .MAX_INUS()
                            .call()
                            .then((res) => {
                                setmaxinu(res);

                                //Getting of total number of minted
                                SmartContractObj.methods
                                    .totalSupply()
                                    .call()
                                    .then((res2) => {
                                        let data2 = {
                                            maxInus: res,
                                            totalSupply: res2,
                                        };

                                        //Getting of total number of inus present for sale
                                        axios
                                            .post(
                                                "https://rf2m4m72z6.execute-api.us-east-2.amazonaws.com/v1/getAvailableForSale",
                                                data2
                                            )
                                            .then((availablesale) => {
                                                let data = JSON.parse(availablesale.data);
                                                if (data.status === "success") {
                                                    setavailableforsale(~~Number(data.value));
                                                }
                                                setavailableinuloader(false);
                                            })
                                            .catch((err) => setavailableinuloader(false));

                                        //Getting of total number of inus present for sale after bought by customer
                                        // axios
                                        //   .post(
                                        //     "https://rf2m4m72z6.execute-api.us-east-2.amazonaws.com/v1/getTotalAvailableInus",
                                        //     { maxInus: res }
                                        //   )
                                        //   .then((availableinu) => {
                                        //     let data = JSON.parse(availableinu.data);
                                        //     if (data.status === "success") {
                                        //       settotalavailableinu(Number(data.value) - 42);
                                        //     } else {
                                        //       settotalavailableinu(200);
                                        //     }
                                        //   });
                                    });
                            });

                        //Getting price of one inu
                        SmartContractObj.methods
                            .inuPrice()
                            .call()
                            .then((res) => setInuPrice(res));
                    } else {
                        seterror(`Change Network to Ethereum Mainnet!!`);
                    }
                    provider.on("accountsChanged", (accounts) => {
                        let selectedAcc = accounts[0];
                        setblockchainaccount(selectedAcc);
                        console.log("Selected Account changed is", selectedAcc);
                    });
                    provider.on("chainChanged", () => {
                        window.location.reload();
                    });
                })
                .catch((err) => {
                    seterror("Something Went Wrong");
                });
        } else {
            seterror("Please install Metamask to continue!!");
        }
    };

    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
            newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > maxInuPurchase) {
            newMintAmount = maxInuPurchase;
        }
        setMintAmount(newMintAmount);
    };

    const mintNFT = () => {
        setbackdropopen(true);
        seterror("Please Wait!! while your INU is being minted..");
        let cost = InuPrice;
        // let gasLimit = 0.03;
        newWeb3.eth.getBlock("latest").then((block) => {
            // var gasLimit = block.gasLimit / block.transactions.length;
            let gasLimit = 285000;
            let totalCostWei = String(cost * mintAmount);
            let totalGasLimit = String(~~Number(gasLimit) * mintAmount);

            smartcontract.methods
                .totalSupply()
                .call()
                .then((res) => {
                    let data = {
                        maxInus: Number(maxinu),
                        totalSupply: Number(res),
                        purchaseAmount: Number(mintAmount),
                    };
                    axios
                        .post(
                            "https://rf2m4m72z6.execute-api.us-east-2.amazonaws.com/v1/CheckSale",
                            data
                        )
                        .then((res) => {
                            let val = JSON.parse(res.data);
                            if (val.status === "success") {
                                smartcontract.methods
                                    .mintInu(mintAmount)
                                    .send({
                                        gasLimit: String(totalGasLimit),
                                        to: "0x2bB935B5E09e577E54C69Ae448cD0582884B4b8E",
                                        from: blockchainaccount,
                                        value: totalCostWei,
                                    })
                                    .once("error", (err) => {
                                        setbackdropopen(false);
                                        if (
                                            err.message ===
                                            "MetaMask Tx Signature: User denied transaction signature."
                                        ) {
                                            seterror(null);
                                        } else {
                                            seterror(
                                                "Sorry, something went wrong please try again later."
                                            );
                                        }
                                    })
                                    .then((receipt) => {
                                        if (Number(val.value) === 0) {
                                            axios.get(
                                                "https://rf2m4m72z6.execute-api.us-east-2.amazonaws.com/v1/sendEmail"
                                            );
                                        }
                                        setbackdropopen(false);
                                        seterror(
                                            `WOW, the INU is yours! go visit Opensea.io to view it.`
                                        );
                                    });
                            } else {
                                setmodalOpen(true);
                                setbackdropopen(false);
                                seterror();
                            }
                        })
                        .catch((err) => {
                            console.log("Entering");
                            setbackdropopen(false);
                            seterror(null);
                        });
                });
        });
    };

    return ( <
        div > { /* <!-- Hero --> */ } <
        Backdrop className = {
            classes.backdrop
        }
        open = {
            backdropopen
        } >
        <
        CircularProgress color = "inherit" / >
        <
        /Backdrop> <
        div className = "hero-main header_container"
        id = "logo" >
        <
        div className = "hero-main-img" >
        <
        img src = {
            HeroImg
        }
        alt = "" / >
        <
        div className = "mintnft-middle-container upperbodyhomepage_container" > {
            error ? ( <
                > {
                    error.split(" ")[0] === "WOW," ? ( <
                        p >
                        Please allow 24 to 48 hours
                        for your Inu Kings Club NFT metadata to update and be viewable on <
                        a href = "https://opensea.io/collection/inu-kings-club"
                        target = "_blank"
                        rel = "noreferrer" >
                        OpenSea <
                        /a> <
                        /p>
                    ) : ( <
                        p > {
                            error
                        } < /p>
                    )
                } <
                />
            ) : ( <
                > {
                    availableinuloader ? (
                        "Loading Available INUs.."
                    ) : ( <
                        > {
                            availableforsale ? ( <
                                p > {
                                    availableforsale
                                }
                                INUs available < /p>
                            ) : ( <
                                > {
                                    Number(availableforsale) === 0 && ( <
                                        p > 0 INUs available < /p>
                                    )
                                } <
                                />
                            )
                        } <
                        />
                    )
                } <
                p > Cost of 1 INU .05 eth + gas < /p> <
                p className = "margin-0" >
                Claim INU(Max Inu {
                    "->"
                } {
                    maxInuPurchase
                }): -
                <
                /p> <
                div style = {
                    {
                        display: "flex",
                        justifyContent: "center"
                    }
                } >
                <
                p onClick = {
                    decrementMintAmount
                } > - < /p> <
                p > {
                    mintAmount
                } < /p> <
                p onClick = {
                    incrementMintAmount
                } > + < /p> <
                /div> <
                div style = {
                    {
                        textAlign: "end"
                    }
                } >
                <
                button className = "mintnft_button"
                onClick = {
                    mintNFT
                } >
                Mint INU <
                /button> <
                /div> <
                />
            )
        } <
        /div> <
        /div> <
        /div> { /* <!-- Hero --> */ }

        { /* <!-- Welcome --> */ } <
        div ref = {
            props.aboutRef
        }
        /> <
        div className = "padding-top-bottom-80 welcome-main" >
        <
        div className = "container text-center" >
        <
        h1 >
        Welcome to the < br / >
        <
        /h1> <
        h1 >
        <
        span > Inu Kings Club < /span> <
        /h1> <
        h3 >
        The Inu Kings is a collection of 10, 000 unique imperial Inu NFTs that live on the ETH blockchain.Every Inu King has unique traits,
        names and titles. <
        /h3> <
        div className = "what-is-main padding-top-bottom-40" >
        <
        div className = "container" >
        <
        h2 > What is Inu Kings ? < /h2> <
        div className = "what-is-main-descp" >
        Inu Kings is a Generational Empire NFT Story Divided into 4 Chapters <
        /div> <
        div className = "what-is-mid-main" >
        <
        div className = "what-is-mid-box" >
        <
        div className = "what-is-mid-box-img" >
        <
        img src = {
            Chapter1
        }
        alt = "" / >
        <
        /div> <
        div className = "what-is-mid-box-descp" >
        Inu Kings is based on the premise that each of our Inu Kings rules a free and independent domain and vies
        for the ascendency of his lineage and the expansion of his empire.Once 100 % of Inu Kings sell out, owners will be eligible to claim their female companion Inu Queens NFT. <
        /div> <
        /div> <
        div className = "what-is-mid-box" >
        <
        div className = "what-is-mid-box-img" >
        <
        img src = {
            Chapter2
        }
        alt = "" / >
        <
        /div> <
        div className = "what-is-mid-box-descp" >
        In order to grow your empire, hold an Inu King NFT on the date all Inu King NFTs sell out 100 % and you will be eligible to claim an Inu Queens NFT
        for no additional cost,
        you just pay the gas. <
        /div> <
        /div> <
        div className = "what-is-mid-box" >
        <
        div className = "what-is-mid-box-img" >
        <
        img src = {
            Chapter3
        }
        alt = "" / >
        <
        /div> <
        div className = "what-is-mid-box-descp" >
        The holder of any Inu Queens NFT one year after it 's
        issuance will be eligible to claim an Inu Puppy NFT
        for no additional cost, you just pay the gas.Furthermore, each holder of an Inu King, Inu Queen or Inu Puppy NFT will be whitelisted with early access to the release of our VRX Inu Kings 3 D NFT collection compatible with leading metaverse platforms including Sandbox, MetaKey and Uniqly.io. <
        /div> <
        /div> <
        div className = "what-is-mid-box" >
        <
        div className = "what-is-mid-box-img" >
        <
        img src = {
            Chapter4
        }
        alt = "" / >
        <
        /div> <
        div className = "what-is-mid-box-descp" >
        We will deploy a new smart contract which will allow members to stake their Inu Kings Club NFTs and earn $KINGS coin / token on a daily / weekly basis.This $KINGS coin / token will form the basis of our P2E metaverse card game(based on Texas Holdem).To stake means to lock up your Inu King NFT
        for a certain period of time(eg., 1 year) and during that time you receive daily / weekly deposits of our $KINGS coin / token which you can accumulate and play a Texas holdem style card game against others and bet your $KINGS coins / tokens within the game. <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        div className = "text-left" >
        <
        img src = {
            WhatisInukingMid
        }
        alt = "" / >
        <
        /div> <
        div className = "how-much-content" >
        <
        div className = "how-much-content-inn" >
        <
        h3 > how much ? < /h3> <
        div className = "how-much-content-descp" >
        Mint Price : 0.05 ETH + gas <
        /div> <
        /div> <
        /div> <
        div className = "text-center" >
        <
        a href = "https://opensea.io/collection/inu-kings-club"
        className = "btn btn-primary" >
        BUY ON OPENSEA <
        /a> <
        p style = {
            {
                cursor: "pointer"
            }
        }
        onClick = {
            () => {
                history("/launch");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        }
        className = "btn btn-secondary" >
        /*CONNECT WALLET & PURCHASE*/ <
        /p> <
        /div> <
        /div> { /* <!-- Welcome --> */ }

        { /* <!-- Spinner --> */ } <
        div className = "text-center how-much-main" >
        <
        div className = "container" >
        <
        div className = "how-much-rorate" >
        <
        img src = {
            SpinImage
        }
        alt = "" / >
        <
        /div> {
            /* <div className="how-much-content">
                        <div className="how-much-content-inn">
                          <h3>how much?</h3>
                          <div className="how-much-content-descp">
                            Inu King mint price will be announced before launch.
                          </div>
                        </div>
                      </div> */
        } <
        /div> <
        /div> { /* <!-- Spinner --> */ }

        { /* <!-- Marquee --> */ } <
        div className = "marquee-main" >
        <
        marquee > * Inu Kings Club * Inu Kings Club * Inu Kings Club < /marquee> <
        /div> { /* <!-- Marquee --> */ }

        { /* <!-- Collection --> */ } <
        div className = "collection-main" >
        <
        div className = "collection-contentbox" >
        <
        div className = "collection-contentbox-inn" >
        <
        h3 > Collection of < /h3> <
        h2 > 10, 000 < /h2> <
        h3 > Unique and Cute < /h3> <
        h3 > Cranky Crocodile Club NFTs < /h3> <
        div className = "collection-seemore" >
        <
        p style = {
            {
                cursor: "pointer"
            }
        }
        onClick = {
            () => {
                history("/collections");
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } >
        <
        img src = {
            CollectionSeeMore
        }
        alt = "" / >
        <
        /p> <
        /div> <
        /div> <
        /div> <
        /div> { /* <!-- Collection --> */ }

        { /* <!-- What is --> */ }

        <
        div className = "what-is-bottom-main" >
        <
        div className = "container" >
        <
        div className = "what-is-left-box" >
        <
        h4 >  License < /h4> <
        div className = "what-is-left-box-descp" >
        When you buy a Cranky Crocodile, you own the license of it, so feel free to create fan arts or use it commercially! <
        /div> <
        /div> <
        div className = "what-is-right-box" >
        <
        img src = {
            WhatisRightImg
        }
        alt = "" / >
        <
        /div> <
        div className = "clearfix" > < /div> <
        /div> <
        /div> { /* <!-- What is --> */ }

        { /* Modal  */ } <
        Modal aria - labelledby = "transition-modal-title"
        aria - describedby = "transition-modal-description"
        className = {
            classes.modal
        }
        open = {
            modalopen
        }
        onClose = {
            () => setmodalOpen(false)
        }
        closeAfterTransition BackdropComponent = {
            Backdrop
        }
        BackdropProps = {
            {
                timeout: 500,
            }
        } >
        <
        Fade in = {
            modalopen
        } >
        <
        div className = {
            classes.paper
        } >
        <
        h2 style = {
            {
                color: "black"
            }
        } > Error!! < /h2> <
        p style = {
            {
                color: "black"
            }
        } >
        You can 't mint more INUs than available.. <
        /p> <
        div style = {
            {
                textAlign: "end"
            }
        } >
        <
        button className = "mintnft_button"
        onClick = {
            () => setmodalOpen(false)
        } >
        Close <
        /button> <
        /div> <
        /div> <
        /Fade> <
        /Modal> { /* Modal  */ } <
        /div>
    );
};

export default UpperBody;
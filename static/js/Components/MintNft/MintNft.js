import React, {
    useEffect,
    useState
} from "react";
import Header from "../Header/Header";
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

const MintNft = () => {
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
                            // "0xd9B38ac1FCB3E85c556c57219cda2848bc8fd9d7"
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
        // let gasLimit = 50000;
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
                                console.log("Entering");
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
        div >
        <
        Header fromwhere = {
            "MintNFT"
        }
        /> <
        Backdrop className = {
            classes.backdrop
        }
        open = {
            backdropopen
        } >
        <
        CircularProgress color = "inherit" / >
        <
        /Backdrop> { /* <!-- Hero --> */ } <
        div id = "logo" >
        <
        div className = "mintnft-hero-main-img" >
        <
        div className = "mintnft-middle-container" > {
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
                        /a> {
                            /* WOW, the INU is yours! go visit
                                                <a
                                                  href="https://opensea.io/collection/inu-kings-club"
                                                  target="_blank"
                                                  rel="noreferrer"
                                                >
                                                  Opensea.io
                                                </a>
                                                to view it. */
                        } <
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

export default MintNft;
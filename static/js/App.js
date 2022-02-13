/*import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import MintNft from "./Components/MintNft/MintNft";
import Collection from "./Components/Collections/Collection";
import "./App.css";

const App = () => {
    return ( <
        div >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < HomePage / >
        }
        /> <
        Route path = "/launch"
        element = { < MintNft / >
        }
        /> <
        Route path = "/collections"
        element = { < Collection / >
        }
        /> <
        /Routes> <
        /div>
    );
};

export default App;
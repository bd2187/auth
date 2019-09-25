import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Signin from "./Signin";

import HeaderContainer from "../containers/HeaderContainer";
import SignUpContainer from "../containers/SignUpContainer";

const App = () => {
    return (
        <Router>
            <HeaderContainer />
            <div className="container" style={{ marginTop: "50px" }}>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={SignUpContainer} />
            </div>
        </Router>
    );
};

export default App;

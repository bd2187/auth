import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";

import HeaderContainer from "../containers/HeaderContainer";
import SignUpContainer from "../containers/SignUpContainer";
import SignInContainer from "../containers/SignInContainer";
import PrivateRouteContainer from "../containers/PrivateRouteContainer";

const App = () => {
    return (
        <Router>
            <HeaderContainer />
            <div className="container" style={{ marginTop: "50px" }}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={SignInContainer} />
                    <Route exact path="/signup" component={SignUpContainer} />
                    <PrivateRouteContainer
                        to="/dashboard"
                        component={Dashboard}
                    />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

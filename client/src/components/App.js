import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Signin from "./Signin";
import Signup from "./Signup";

const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
        </Router>
    );
};

export default App;

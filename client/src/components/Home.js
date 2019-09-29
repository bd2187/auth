import React from "react";
import axios from "axios";

const makeRequest = () => {
    axios
        .get("http://localhost:5000/users/private-route")
        .then(res => {
            console.warn(res);
        })
        .catch(err => {
            console.warn(err);
        });
};

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <button onClick={makeRequest}>request</button>
        </div>
    );
};

export default Home;

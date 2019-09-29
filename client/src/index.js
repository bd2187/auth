import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import jwtDecode from "jwt-decode";

import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import thunk from "redux-thunk";
import combinedReducers from "./reducers/reducers";
import setAuthHeader from "./utils/setAuthHeader";

const store = createStore(
    combinedReducers,
    {},
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const userToken = localStorage.getItem("token");

// Check if token is in local storage
if (userToken) {
    const decodedToken = jwtDecode(userToken);
    const tokenExpiration = decodedToken.expiresIn;
    const currentTime = new Date().getTime();

    // If token is expired, dispatch 'SIGN_OUT_USER' action.
    // Otherwise, disptach the 'SIGN_IN_USER' action
    if (currentTime > tokenExpiration) {
        store.dispatch({
            type: "SIGN_OUT_USER",
            payload: ""
        });
        setAuthHeader(null);
    } else {
        store.dispatch({
            type: "SIGN_IN_USER",
            payload: {
                data: {
                    token: userToken,
                    email: decodedToken.email
                }
            }
        });
        setAuthHeader(userToken);
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

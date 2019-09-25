import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import jwtDecode from "jwt-decode";

import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import thunk from "redux-thunk";
import combinedReducers from "./reducers/reducers";

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
if (userToken) {
    const decodedToken = jwtDecode(userToken);

    // todo: check exp date on token. if exp date is greater than date.now,
    // log user out of app. otherwise, log them in app
    store.dispatch({
        type: "SIGN_IN_USER",
        payload: {
            data: {
                token: userToken,
                email: decodedToken.email
            }
        }
    });
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

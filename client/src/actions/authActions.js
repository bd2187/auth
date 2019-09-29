import axios from "axios";
import setAuthHeader from "../utils/setAuthHeader";

export function signUpUser(email, password) {
    return function(dispatch) {
        dispatch({
            type: "LOAD_AUTHENTICATION"
        });

        return axios
            .post("http://localhost:5000/users/signup", { email, password })
            .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: "SIGN_UP_USER",
                        payload: res.data
                    });

                    localStorage.setItem("token", res.data.data.token);
                    setAuthHeader(res.data.data.token);
                } else {
                    dispatch({
                        type: "AUTH_ERROR",
                        payload: res.data
                    });
                }
            })
            .catch(err => {
                dispatch({
                    type: "AUTH_ERROR",
                    payload: err
                });
            });
    };
}

export function signInUser(email, password) {
    return function(dispatch) {
        dispatch({
            type: "LOAD_AUTHENTICATION"
        });

        return axios
            .post("http://localhost:5000/users/signin", { email, password })
            .then(res => {
                if (res.data.success) {
                    dispatch({
                        type: "SIGN_IN_USER",
                        payload: res.data
                    });

                    localStorage.setItem("token", res.data.data.token);
                    setAuthHeader(res.data.data.token);
                } else {
                    dispatch({
                        type: "AUTH_ERROR",
                        payload: res.data
                    });
                }
            })
            .catch(err => {
                dispatch({
                    type: "AUTH_ERROR",
                    payload: err
                });
            });
    };
}

export function signOutUser() {
    localStorage.removeItem("token");
    setAuthHeader(null);

    return { type: "SIGN_OUT_USER", payload: "" };
}

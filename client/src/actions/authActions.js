import axios from "axios";
import jwtDecode from "jwt-decode";

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

                    var decodedToken = jwtDecode(res.data.data.token);
                    console.log(decodedToken);

                    localStorage.setItem("token", res.data.data.token);
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

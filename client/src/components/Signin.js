import React, { useState } from "react";

const Signin = ({ signInUser, error }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateInputValue = function(evt) {
        var inputType = evt.target.getAttribute("type");
        var inputValue = evt.target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        }

        if (inputType === "password") {
            setPassword(inputValue);
        }
    };

    const submitForm = function(evt) {
        evt.preventDefault();

        signInUser(email, password);
    };

    return (
        <>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={email}
                        required
                        onChange={updateInputValue}
                        placeholder="email"
                    />
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        required
                        onChange={updateInputValue}
                        placeholder="password"
                    />
                </div>

                {error.message ? (
                    <div className="alert alert-danger">{error.message}</div>
                ) : null}

                <input
                    type="submit"
                    value="Sign in"
                    className="btn btn-primary"
                />
            </form>
        </>
    );
};

export default Signin;

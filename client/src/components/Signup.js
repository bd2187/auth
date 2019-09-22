import React, { useState } from "react";

const Signup = () => {
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

    const signUpUser = function(evt) {
        evt.preventDefault();
    };

    return (
        <>
            <form onSubmit={signUpUser}>
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
                <input
                    type="submit"
                    value="Sign up"
                    className="btn btn-primary"
                />
            </form>
        </>
    );
};

export default Signup;

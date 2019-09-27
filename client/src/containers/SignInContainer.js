import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Signin from "../components/Signin";
import { signInUser } from "../actions/authActions";

const SignInContainer = props => {
    return props.isAuthenticated ? (
        <Redirect to="/" />
    ) : (
        <Signin signInUser={props.signInUser} error={props.error} />
    );
};

const mapStateToProps = state => {
    return {
        error: state.user.error,
        isAuthenticated: state.user.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signInUser: (email, password) => {
            dispatch(signInUser(email, password));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInContainer);

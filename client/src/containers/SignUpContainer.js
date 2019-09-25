import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Signup from "../components/Signup";
import { signUpUser } from "../actions/authActions";

const SignUpContainer = props => {
    return props.isAuthenticated ? (
        <Redirect to="/" />
    ) : (
        <Signup signUpUser={props.signUpUser} error={props.error} />
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
        signUpUser: (email, password) => dispatch(signUpUser(email, password))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpContainer);

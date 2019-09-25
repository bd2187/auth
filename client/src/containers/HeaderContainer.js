import React from "react";
import { connect } from "react-redux";
import { signOutUser } from "../actions/authActions";
import Header from "../components/Header";

const HeaderContainer = ({ isAuthenticated, signOutUser }) => {
    return (
        <Header isAuthenticated={isAuthenticated} signOutUser={signOutUser} />
    );
};

const mapStateToProps = state => {
    return { isAuthenticated: state.user.isAuthenticated };
};

const mapDispatchToProps = dispatch => {
    return {
        signOutUser: () => dispatch(signOutUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);

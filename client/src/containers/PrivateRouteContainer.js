import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteContainer = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = rest;

    return (
        <Route
            {...rest}
            render={props => {
                return isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                );
            }}
        />
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    };
};
export default connect(mapStateToProps)(PrivateRouteContainer);

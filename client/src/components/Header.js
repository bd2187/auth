import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, signOutUser }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                LOGO
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">
                            dashboard
                        </Link>
                    </li>
                </ul>

                <ul className="nav navbar-nav ml-auto">
                    {isAuthenticated ? (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                                onClick={signOutUser}
                            >
                                sign out
                            </Link>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup">
                                    sign up
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">
                                    sign in
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;

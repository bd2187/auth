import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/signout">
                                sign out
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;

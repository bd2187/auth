import axios from "axios";

const setAuthHeader = function setAuthHeader(token) {
    token
        ? (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`)
        : delete axios.defaults.headers.common["Authorization"];
};

export default setAuthHeader;

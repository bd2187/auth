const defaultState = {
    isAuthenticated: false,
    token: "",
    email: "",
    error: {},
    loading: false
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_AUTHENTICATION":
            return { ...state, loading: true };

        case "SIGN_UP_USER":
            return {
                ...state,
                loading: false,
                token: action.payload.data.token,
                email: action.payload.data.email,
                isAuthenticated: true,
                error: {}
            };

        case "SIGN_IN_USER":
            return {
                ...state,
                loading: false,
                token: action.payload.data.token,
                email: action.payload.data.email,
                isAuthenticated: true,
                error: {}
            };

        case "SIGN_OUT_USER":
            return {
                ...state,
                loading: false,
                token: "",
                email: "",
                isAuthenticated: false,
                error: {}
            };

        case "AUTH_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

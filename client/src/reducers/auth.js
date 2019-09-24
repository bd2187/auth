const defaultState = {
    isAuthenticated: false,
    token: "",
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
                isAuthenticated: true
            };

        case "SIGN_IN_USER":
            break;

        case "SIGN_OUT_USER":
            break;

        case "AUTH_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }

    return state;
};

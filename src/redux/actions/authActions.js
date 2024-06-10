export const login = (username) => {
    return {
        type: "LOGIN",
        payload: { username },
    };
};

export const logout = () => {
    return {
        type: "LOGOUT",
    };
};

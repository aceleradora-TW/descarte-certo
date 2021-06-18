export const isAuthenticated = () => {
    return (
        ((localStorage.getItem("token-descarte-certo") !== null) && (localStorage.getItem("token-descarte-certo") !== "")) ? true : false
    );
};


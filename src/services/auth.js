const tokenName = 'sessionToken';

export const isLogged = () => {
    if (sessionStorage.getItem(tokenName)) {
        return true;
    }
    return false;
};

export const logOut = () => {
    sessionStorage.removeItem(tokenName);
};

export const setSession = (sessKey) => {
    sessionStorage.setItem(tokenName, sessKey);
};

export default isLogged;
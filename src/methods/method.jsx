import Cookies from 'js-cookie';

export const setCookie = (name , value , expiry) => {
   return Cookies.set(name, value, { expires: expiry, path: '' })
}

export const getCookie = (name) => {
    return Cookies.get(name);
}

export const setStorage = (key , value) => {
    return localStorage.setItem(key, value);
}

export const getStorage = (key) => {
    return localStorage.getItem(key);
}
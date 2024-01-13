import Cookies from 'js-cookie';

export const setCookie = (name , value , expiry) => {
   return Cookies.set(name, value, { expires: expiry, path: '' })
}

export const getCookie = (name) => {
    Cookies.get(name);
}
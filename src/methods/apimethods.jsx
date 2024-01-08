import axios from 'axios';

export const getCall = (url , header = {}) => {
    return new Promise(async (res, rej) => {
        let data = await axios.get(url , header);
        res(data);
    })
}

export const postCall = (url , body , header = {}) => {
    return new Promise( async (res, rej) => {
        let data = await axios.post(url , body , header);
        res(data);
    })
}
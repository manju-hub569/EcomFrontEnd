import axios from 'axios';

export const getCall = (url) => {
    return new Promise(async (res, rej) => {
        let data = await axios.get(url);
        res(data);
    })
}
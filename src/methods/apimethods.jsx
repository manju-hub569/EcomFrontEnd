import axios from 'axios';

export const getCall = (url , header = {}) => {
    return new Promise(async (res, rej) => {
        try {
            let data = await axios.get(url , header);
            res(data);            
        } catch (error) {
            rej(error);
        }
    })
}

export const postCall = (url , body , header = {}) => {
    return new Promise( async (res, rej) => {
        try {
            let data = await axios.post(url , body , header);
            res(data);            
        } catch (error) {
            rej(error);
        }
    })
}
import axios from 'axios';

export const getCall = (url , headers = {}) => {
    return new Promise(async (res, rej) => {
        try {
            let data = await axios.get(url , headers);
            res(data);            
        } catch (error) {
            rej(error);
        }
    })
}

export const postCall = (url , body , headers = {}) => {
    console.log('ppp', headers);
    return new Promise( async (res, rej) => {
        try {
            let data = await axios.post(url , body , {headers});
            res(data);            
        } catch (error) {
            rej(error);
        }
    })
}    
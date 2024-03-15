import axios from 'axios';
import { getCookie } from './method';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getCookie('token')}`
};

export const getCall = (url) => {
    return new Promise(async (res, rej) => {
        try {
            let data = await axios.get(url , headers);
            res(data);            
        } catch (error) {
            rej(error);
        }
    })
}

export const postCall = (url , body) => {
    return new Promise( async (res, rej) => {
        try {
            let data = await axios.post(url , body , {headers});
            res(data);            
        } catch (error) {
            rej(error);
        }
    })
}    
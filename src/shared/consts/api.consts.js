import axios from 'axios';

export const APIHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': process.env.REACT_APP_API_KEY,
    //'Access-Control-Allow-Origin': ,
    // 'Accept-Language': {
    //     toString () {
    //         return i18next.language
    //     }
    // },
    // 'Authorization': {
    //     toString () {
    //         return `Bearer ${getCookieUtil('token')}`
    //     }
    // }
};

export const API = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    timeout: 12000,
    headers: APIHeaders
}); 

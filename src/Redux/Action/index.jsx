import { INC , DEC, FETCH_DATA_SUCCESS , FETCH_JEWEL_SUCCESS } from "../ActionTypes";

export const increment = () => {
    return {
        type : INC
    }
}

export const decrement = () => {
    return {
        type : DEC
    }
}

export const getApiCall = (user) => {
    return {
        type : FETCH_DATA_SUCCESS , 
        payload : user
    }
}

export const jewelapi = (data) => {
    return {
        type : FETCH_JEWEL_SUCCESS ,
        payload : data
    }
}
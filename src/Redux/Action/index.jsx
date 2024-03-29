import { INC , DEC, FETCH_DATA_SUCCESS , FETCH_CATEG_SUCCESS } from "../ActionTypes";

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

export const categapi = (data) => {
    return {
        type : FETCH_CATEG_SUCCESS ,
        payload : data
    }
}
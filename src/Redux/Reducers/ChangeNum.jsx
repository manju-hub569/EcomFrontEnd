import axios from "axios";
import { INC , DEC, FETCH_DATA_SUCCESS } from "../ActionTypes";
import { getApiCall } from "../Action";

const initialState = 0;

 export const incDecReduce = (state = initialState , action) => {
    switch(action.type) {
        case INC : return state + 1
        case DEC : return state - 1
        default : return state
    }
}

const init = {
    getDataApi : {
        loading : false ,
        data : []
    }
};

export const getReducer = (state = init , action) => {
    switch(action.type) {
        case FETCH_DATA_SUCCESS : return {
            ...state , getDataApi : {loading : false , payload : action.payload }
        }

        default : return state
    }
}

export const apiCall = () => {
    return (dispatch) => {
        axios.get('https://fakestoreapi.com/products').then((data) => {
            const categ = data.data.map(val => val);
            dispatch(getApiCall(categ));
        })
    }
}
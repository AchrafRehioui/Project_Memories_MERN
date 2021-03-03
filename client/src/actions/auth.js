import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {

    // sign in the user ..
    try {

        history.push('/');

    } catch (error) {

        console.log(error);

    }
}



export const signup = (formData, history) => async (dispatch) => {

    //sign up the user ..
    
    try {

        history.push('/');

    } catch (error) {

        console.log(error);

    }
}
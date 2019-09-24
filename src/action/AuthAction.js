/* eslint-disable no-undef */
import axios from 'axios'
import config from './config'
import * as types from '../constants'




export const signupAction = (payload) => {

    return dispatch => {
        dispatch({
            type: types.SIGN_UP_REQUEST,
        })

        axios.post(config.SERVER_API_URL+"users",payload )
            .then(function (response) {
                dispatch({
                    type: types.SIGN_UP_SUCCESS,
                    response
                })
            })
            
            .catch(function (error) { 
                dispatch({
                    type: types.SIGN_UP_FAILED,
                    error
                })
            });
           
           
    };
    
    

}

export const loginAction = (payload) => {

    return dispatch => {
        dispatch({
            type: types.LOGIN_REQUEST,
        })

        axios.post(config.LOGIN_API,payload )
            .then(function (response) {
                localStorage.setItem('appToken' , response.data.token);
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    response
                })
            })
            .catch(function (error) { 
                dispatch({
                    type: types.LOGIN_FAILED,
                    error
                })
            });
    };

}

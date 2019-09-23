import axios from 'axios'
import config from './config'
import * as types from '../constants'
import _ from 'lodash'




export const signupAction = (payload) => {

    return dispatch => {
        // dispatch({
        //     type: types.SIGN_UP_REQUEST,
        // })

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



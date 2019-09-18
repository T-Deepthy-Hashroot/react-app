import axios from 'axios'
import config from './config'
import * as types from '../constants'
import _ from 'lodash'




export const signupAction = (payload) => {
    console.log("payload from action",payload)
    // return (dispatch) => {
    //     dispatch({
    //         type: types.FOOD_ADD_REQUEST,
    //     })
    //     axios.post(config.SERVER_API_URL+"food/",payload )
    //         .then(function (response) {
    //             dispatch({
    //                 type: types.FOOD_ADD_SUCCESS,
    //                 response
    //             })
    //             dispatch(foodListAction())
    //         })
    //         .catch(function (error) {
    //             dispatch({
    //                 type: types.FOOD_ADD_FAILED,
    //                 error
    //             })
    //         });
    // };

}



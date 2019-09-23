import * as types from '../constants'
const INITIAL_STATE = { data: [], error: null, loading: false, status: null }
const authReducer =   (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SIGN_UP_REQUEST:
            return {
                data: [],
                error: null,
                loading: true,
                status: null
            }
            case types.SIGN_UP_SUCCESS:
                return {
                    data: action.response.data,
                    error: null,
                    loading: false,
                    status: action.response && action.response.status
                }
            case types.SIGN_UP_FAILED:
                return {
                    data: [],
                    error: action.error,
                    loading: false,
                    status: null
                }
        default:
            return state;
    }

}
export default authReducer;
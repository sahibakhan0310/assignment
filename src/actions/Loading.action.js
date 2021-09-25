import { LOGGED_SUCCESSFULL, SET_LOADING,LOGGED_UNSUCCESSFULL } from "../constant"
export const setLoading = (payload) =>{
    return {
        type: SET_LOADING,
        payload:payload
    }
}
export const loginUser = (payload) =>{
    return {
        type: LOGGED_SUCCESSFULL,
        payload:payload
    }
}
export const loginUserUnsuccessful = (payload) =>{
    return {
        type: LOGGED_UNSUCCESSFULL,
        payload:payload
    }
}
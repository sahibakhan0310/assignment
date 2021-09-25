import { SET_LOADING } from "../constant"
export const setLoading = (payload) =>{
    return {
        type: SET_LOADING,
        payload:payload
    }
}
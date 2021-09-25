const initialState ={
    showLoading:false,
    isLoggedIn:false,
    isError:false
}
const loadingReducer = (state=initialState,action) =>{
switch(action.type)
{
    case "SET_LOADING":
        return {
            ...state,
            showLoading:action.payload
        }
    case "LOGGED_SUCCESSFULL":
        return {
            ...state,
            isLoggedIn:true,
            showLoading:false,
            isError:false
        }
        case "LOGGED_UNSUCCESSFULL":
            return {
                ...state,
                isLoggedIn:false,
                showLoading:false,
                isError:true
            }
    default:
        return state;
}
}

export default loadingReducer
const initialState ={
    showLoading:false
}
const loadingReducer = (state=initialState,action) =>{
switch(action.type)
{
    case "SET_LOADING":
        return {
            ...state,
            showLoading:action.payload
        }
    default:
        return state;
}
}

export default loadingReducer
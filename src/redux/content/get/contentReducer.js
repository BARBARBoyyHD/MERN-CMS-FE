import { GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_CONTENT_ERROR } from "./contentTypes";

const initialState = {
    loading:false,
    data:[],
    error:""
}

const getContentReducer = (state = initialState, action) => {
    
    switch(action.type){
        case GET_CONTENT_REQUEST:
            return{...state,loading:true}
        case GET_CONTENT_SUCCESS:
            return{...state,loading:false,data:action.payload}
        case GET_CONTENT_ERROR:
            return{...state,loading:false,error:action.payload}
        default:
            return state
    }

}

export default getContentReducer
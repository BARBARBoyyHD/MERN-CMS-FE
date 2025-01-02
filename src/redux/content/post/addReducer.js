import { ADD_CONTENT_REQUEST,ADD_CONTENT_SUCCESS, ADD_CONTENT_ERROR } from "./addTypes";

const initialState = {
    loading:false,
    data:null,
    error:null
}

const addContentReducer = (state = initialState , action)=>{
    switch(action.type){
        case ADD_CONTENT_REQUEST:
            return{...state,loading:true}
        case ADD_CONTENT_SUCCESS :
            return{...state,loading:false,data:action.payload}
        case ADD_CONTENT_ERROR :
            return {...state,loading:false,error:action.payload}
        default:
            return state
    }
}

export default addContentReducer
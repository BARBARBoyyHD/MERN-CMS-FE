import { ADD_CONTENT_REQUEST,ADD_CONTENT_SUCCESS, ADD_CONTENT_ERROR } from "./addTypes";
import axios from "axios";

const addContentRequest = ()=>{
    return{
        type:ADD_CONTENT_REQUEST
    }
}

const addContentSuccess = (data)=>{
    return{
        type:ADD_CONTENT_SUCCESS,
        payload:data
    }
}

const addContentError = (error)=>{
    return{
        type:ADD_CONTENT_ERROR,
        payload:error
    }
}

export const addContent = (data)=>{
    return(dispatch)=>{
        dispatch(addContentRequest())
        axios.post("https://mern-cms-qrmg.vercel.app/api/v1/create/content",data)
        .then((response)=>{
            dispatch(addContentSuccess(response.data))
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(addContentError(error))
        })
    }
}
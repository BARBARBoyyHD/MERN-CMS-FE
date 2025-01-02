import { GET_CONTENT_REQUEST, GET_CONTENT_SUCCESS, GET_CONTENT_ERROR } from "./contentTypes";
import axios from "axios";

const getContentRequest = ()=>{
    return{
        type:GET_CONTENT_REQUEST
    }
}

const getContentSuccess = (data)=>{
    return{
        type:GET_CONTENT_SUCCESS,
        payload:data
    }
}

const getContentError = (error)=>{
    return{
        type:GET_CONTENT_ERROR,
        payload:error
    }
}

export const getContent = ()=>{
    return(dispatch)=>{
        dispatch(getContentRequest());
        axios.get("https://mern-cms-qrmg.vercel.app/api/v1/show/content")
        .then((response)=>{
            dispatch(getContentSuccess(response.data))
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(getContentError(error))
        })
    }
}
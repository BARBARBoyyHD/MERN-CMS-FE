import { EDIT_CONTENT_REQUEST,EDIT_CONTENT_SUCCESS,EDIT_CONTENT_ERROR } from "./putTypes";
import axios from "axios";

const editRequest = (id)=>{
    return{
        type:EDIT_CONTENT_REQUEST,
        payload:id
    }
}

const editSuccess = (data)=>{
    return{
        type:EDIT_CONTENT_SUCCESS,
        payload:data
    }
}

const editError = (error)=>{
    return{
        type:EDIT_CONTENT_ERROR,
        payload:error
    }
}

export const editContent = (id,data)=>{
    return(dispatch)=>{
        dispatch(editRequest())
        axios.put(`https://mern-cms-qrmg.vercel.app/api/v1/update/content/${id}`,data)
        .then((response)=>{
            dispatch(editSuccess(response.data))
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(editError(error))
        })
    }
}

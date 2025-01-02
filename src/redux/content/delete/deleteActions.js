import { DELETE_REQUEST,DELETE_SUCCESS,DELETE_ERROR } from "./deleteTyoes";
import axios from "axios";

const deleteRequest = (id)=>{
    return{
        type:DELETE_REQUEST,
        payload:id
    }
}

const deleteSuccess = (data)=>{
    return{
        type:DELETE_SUCCESS,
        payload:data
    }
}

const deleteError = (error)=>{
    return{
        type:DELETE_ERROR,
        payload:error
    }
}

export const deleteContent = (id)=>{
    return(dispatch)=>{
        dispatch(deleteRequest())
        axios.delete(`https://mern-cms-qrmg.vercel.app/api/v1/delete/content/${id}`)
        .then((response)=>{
            dispatch(deleteSuccess(response.data))
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(deleteError(error))
        })
    }
}
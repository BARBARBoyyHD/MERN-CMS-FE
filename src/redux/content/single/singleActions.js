import { SINGLE_REQUEST,SINGLE_SUCCESS,SINGLE_FAILURE } from "./singleTypes";
import axios from "axios";

const singleRequest = (id)=>{
    return{
        type:SINGLE_REQUEST,
        payload:id
    }
}

const singleSuccess = (data)=>{
    return{
        type:SINGLE_SUCCESS,
        payload:data
    }
}

const singleFailure = (error) => {
    return{
        type:SINGLE_FAILURE,
        payload:error
    }
}

export const singleContent = (id)=>{
    return(dispatch)=>{
        dispatch(singleRequest())
        axios.get(`https://mern-cms-qrmg.vercel.app/api/v1/get/content/${id}`)
        .then((response)=>{
            dispatch(singleSuccess(response.data))
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(singleFailure(error))
        })
    }
}
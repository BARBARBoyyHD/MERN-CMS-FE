import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./loginTypes";
import axios from "axios";

const loginRequest = ()=>{
    return{
        type:LOGIN_REQUEST
    }
}

const loginSuccess = (data)=>{
    return{
        type:LOGIN_SUCCESS,
        payload:data
    }
}

const loginError =(error)=>{
    return{
        type:LOGIN_ERROR,
        payload:error
    }
}

export const login = (data)=>{  

    return(dispatch)=>{
        dispatch(loginRequest())
        axios.post("https://mern-cms-qrmg.vercel.app/api/v1/login",data)
        .then((response)=>{
            dispatch(loginSuccess(response.data))
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(loginError(error))
        })
    }
}
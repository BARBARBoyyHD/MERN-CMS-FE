import axios from "axios";
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from "./registerTypes";

const registerRequest = () => {
    return {
        type: REGISTER_REQUEST
    }
}

const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}

const registerError = (error) => {
    return {
        type: REGISTER_ERROR,
        payload: error
    }
}

export const register = (data)=>{
    return(dispatch)=>{
        dispatch(registerRequest())
        axios.post("https://mern-cms-qrmg.vercel.app/api/v1/register/user",data)
        .then((response)=>{
            dispatch(registerSuccess(response.data))
            
            console.log(response.data);
        })
        .catch((error)=>{
            dispatch(registerError(error))
        })
    }
}
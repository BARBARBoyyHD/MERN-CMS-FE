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

export const deleteContent = (id) => {
    return (dispatch) => {
      dispatch(deleteRequest(id));
      return axios // Return the promise
        .delete(`https://mern-cms-qrmg.vercel.app/api/v1/delete/content/${id}`)
        .then((response) => {
          console.log("Delete response:", response.data);
          dispatch(deleteSuccess(id)); // Pass the deleted item's ID
        })
        .catch((error) => {
          console.error("Delete error:", error);
          dispatch(deleteError(error));
        });
    };
  };
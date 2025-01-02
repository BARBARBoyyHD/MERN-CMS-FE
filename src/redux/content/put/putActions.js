import {
  EDIT_CONTENT_REQUEST,
  EDIT_CONTENT_SUCCESS,
  EDIT_CONTENT_ERROR,
} from "./putTypes";
import axios from "axios";

// Action creators
const editRequest = () => ({
  type: EDIT_CONTENT_REQUEST,
});

const editSuccess = (data) => ({
  type: EDIT_CONTENT_SUCCESS,
  payload: data,
});

const editError = (error) => ({
  type: EDIT_CONTENT_ERROR,
  payload: error,
});

// Thunk action
export const editContent = (id, data) => {
    return (dispatch) => {
      dispatch(editRequest(id));
      return axios // Return the promise
        .put(`https://mern-cms-qrmg.vercel.app/api/v1/update/content/${id}`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Response data:", response.data);
          dispatch(editSuccess(response.data.data));
          return response; // Return the response for chaining
        })
        .catch((error) => {
          console.error("Error:", error.response?.data || error.message);
          dispatch(editError(error.response?.data || error.message));
          throw error; // Throw the error for chaining
        });
    };
  };
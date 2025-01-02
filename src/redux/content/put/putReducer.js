import {
  EDIT_CONTENT_REQUEST,
  EDIT_CONTENT_SUCCESS,
  EDIT_CONTENT_ERROR,
} from "./putTypes";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const editContent = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CONTENT_REQUEST:
      return { ...state, loading: true };
    case EDIT_CONTENT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case EDIT_CONTENT_ERROR:
      return { ...state, loading: false, error: action.payload };
  }
};

export default editContentReducer;

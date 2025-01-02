import { DELETE_REQUEST, DELETE_SUCCESS, DELETE_ERROR } from "./deleteTyoes";
const initialState = {
  loading: false,
  data: null,
  error: null,
};

const deleteContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_REQUEST:
      return { ...state, loading: true };
    case DELETE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case DELETE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default deleteContentReducer;

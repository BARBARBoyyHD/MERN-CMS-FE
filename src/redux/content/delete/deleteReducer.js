import { DELETE_REQUEST, DELETE_SUCCESS, DELETE_ERROR } from "./deleteTyoes";
const initialState = {
  loading: false,
  data: [],
  error: null,
};

const deleteContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_REQUEST:
      return { ...state, loading: true };
    case DELETE_SUCCESS:
      // Remove the deleted item from the state
      return {
        ...state,
        loading: false,
        data: state.data.filter((item) => item.id !== action.payload), // Filter out the deleted item
      };
    case DELETE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default deleteContentReducer;

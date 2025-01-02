import {
  EDIT_CONTENT_REQUEST,
  EDIT_CONTENT_SUCCESS,
  EDIT_CONTENT_ERROR,
} from "./putTypes";

const initialState = {
  loading: false,
  data: [], // Assuming an array of items in your state
  error: null,
};

const editContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CONTENT_REQUEST:
      return { ...state, loading: true };
    case EDIT_CONTENT_SUCCESS:
      // If the payload is an array of items, just replace the data.
      // If it's a single item, replace or update the item in the existing data array.
      return {
        ...state,
        loading: false,
        data: Array.isArray(action.payload)
          ? action.payload
          : state.data.map((item) =>
              item.id === action.payload.id ? action.payload : item
            ),
      };
    case EDIT_CONTENT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default editContentReducer;

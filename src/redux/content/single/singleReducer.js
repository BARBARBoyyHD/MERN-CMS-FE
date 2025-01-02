import { SINGLE_REQUEST, SINGLE_SUCCESS, SINGLE_FAILURE } from "./singleTypes";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_REQUEST:
      return { ...state, loading: true };
    case SINGLE_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case SINGLE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default singleReducer
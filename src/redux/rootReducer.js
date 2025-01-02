import { combineReducers } from "redux";
import getContentReducer from "./content/get/contentReducer";
import registerReducer from "./register/registerReducer";
import loginReducer from "./login/loginReducer";
import addContentReducer from "./content/post/addReducer";
import deleteContentReducer from "./content/delete/deleteReducer";
import singleReducer from "./content/single/singleReducer";
import editContentReducer from "./content/put/putReducer";
const rootReducer = combineReducers({
  getContent: getContentReducer,
  register: registerReducer,
  login: loginReducer,
  addContent: addContentReducer,
  deleteContent: deleteContentReducer,
  singleContent: singleReducer,
  editContent: editContentReducer,
});

export default rootReducer;

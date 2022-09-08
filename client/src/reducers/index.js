import { combineReducers } from "redux";

import authReducer from "./authReduces";
import postreducer from "./postReducer";

export const reducers = combineReducers({ authReducer, postreducer });

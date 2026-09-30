import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import uiReducer from "./slices/ui-slice";
import taskReducer from "./slices/task-slice";
import { taskApi } from "./services/task-api";

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  tasks: taskReducer,
  [taskApi.reducerPath]: taskApi.reducer,
});

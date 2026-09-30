import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { taskApi } from "./services/task-api";

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types or field paths if non-serializable data is passed
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }).concat(taskApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];

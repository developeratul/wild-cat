import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appReducer from "./features/appSlice";
import characterReducer from "./features/characterSlice";

export const store = configureStore({
  reducer: {
    // ...
    app: appReducer,
    character: characterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();
  return dispatch;
};

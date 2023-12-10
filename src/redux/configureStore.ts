import { configureStore } from "@reduxjs/toolkit";
import { articleSlice } from "@app/redux/article/article.slice";
import { useDispatch } from "react-redux";


export const store = configureStore({
  reducer: {
    articleSlice: articleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()

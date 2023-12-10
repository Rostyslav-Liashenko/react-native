import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@app/redux/article/types";
import { fetchPost } from "@app/redux/article/article.thunk";

interface ArticleState {
  articles: Article[],
  isLoading: boolean,
  numberPage: number
}

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  numberPage: 1,
}


export const articleSlice = createSlice({
  name: 'articleSlice',
  initialState,
  reducers: {
    increasePage: (state, { payload }: PayloadAction<number>) => {
      state.numberPage = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPost.pending, state => {
      state.isLoading = true;
    })
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.articles = [...state.articles, ...action.payload];
      state.isLoading = false;
    })
    builder.addCase(fetchPost.rejected, state => {
      state.isLoading = false;
    })
  }
});

export const { increasePage } = articleSlice.actions;

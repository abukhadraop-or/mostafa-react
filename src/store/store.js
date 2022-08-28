import { createSlice, configureStore } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: [],
    moviesPage: 1,
  },
  reducers: {
    appendMovieList: {
      reducer(state, action) {
        state.movieList = [...state.movieList, ...action.payload]
      },
    },
    setMovieList: {
      reducer(state, action) {
        state.movieList = action.payload
      },
    },
    incrementMoviesPage: {
      reducer(state) {
        state.moviesPage += 1
      }
    },
    resetMoviesPage: {
      reducer(state) {
        state.moviesPage = 1
      }
    }
  },
});

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});


export const moviesActions = moviesSlice.actions;
export default store;

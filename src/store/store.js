import { createSlice, configureStore } from "@reduxjs/toolkit";

const breakPoint = 1000;

const mobileSlice = createSlice({
  name: "mobile",
  initialState: {
    mobileBreakPoint: breakPoint,
    isMobile: window.innerWidth < breakPoint,
    screenWidth: window.innerWidth,
  },
  reducers: {
    setMobileState: {
      reducer(state) {
        state.screenWidth = window.innerWidth;
        state.isMobile = window.innerWidth < breakPoint;
      },
    },
  },
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    apiKey: "0b7a45b84863262f053eb799d51f84fb",
    baseURL: "https://api.themoviedb.org",
    sortedBy: "Popularity Descending",
  },
  reducers: {
    setSortedBy: {
      reducer(state, action) {
        state.sortedBy = action.payload;
      },
    },
  },
});

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
    mobile: mobileSlice.reducer,
    api: apiSlice.reducer,
    movies: moviesSlice.reducer,
  },
});


export const mobileActions = mobileSlice.actions;
export const apiActions = apiSlice.actions;
export const moviesActions = moviesSlice.actions;
export default store;

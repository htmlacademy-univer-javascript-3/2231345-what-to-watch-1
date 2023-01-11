import {createReducer} from '@reduxjs/toolkit';
import {
  loadComments,
  loadFavoriteFilms,
  loadFilm,
  loadFilms,
  loadPromoFilm,
  loadSimilarFilms, setDataLoadingError,
  setDataLoadingStatus
} from './action';
import {Film, Films} from '../../types/film';
import {Comments} from '../../types/comment';

export type FilmsState = {
  films: Films,
  promoFilm: Film | null
  isDataLoading: boolean,
  hasError: boolean,
  currentFilm: Film | null,
  comments: Comments,
  similarFilms: Films,
  favoriteFilms: Films
};

const initialState: FilmsState = {
  films: [],
  promoFilm: null,
  isDataLoading: false,
  hasError: false,
  comments: [],
  currentFilm: null,
  similarFilms: [],
  favoriteFilms: []
};

export const filmReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(setDataLoadingError, (state, action) => {
      state.hasError = action.payload;
    });
});

import {createReducer} from '@reduxjs/toolkit';
import {loadComments, loadFilm, loadFilms, loadPromoFilm, loadSimilarFilms, setDataLoadingStatus} from './action';
import {Film, Films} from '../../types/film';
import {Comments} from '../../types/comment';

export type FilmsState = {
  films: Films,
  promoFilm: Film | null
  isDataLoading: boolean,
  error: string | null,
  currentFilm: Film | null,
  comments: Comments,
  similarFilms: Films
};

const initialState: FilmsState = {
  films: [],
  promoFilm: null,
  isDataLoading: false,
  error: null,
  comments: [],
  currentFilm: null,
  similarFilms: []
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
    });
});

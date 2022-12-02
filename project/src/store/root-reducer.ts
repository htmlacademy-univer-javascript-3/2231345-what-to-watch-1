import {createReducer} from '@reduxjs/toolkit';
import {
  loadComments, loadFilm,
  loadFilms,
  loadPromoFilm,
  loadSimilarFilms,
  setAuthorizationStatus,
  setDataLoadingStatus
} from './action';
import {Film, Films} from '../types/film';
import {AuthorizationStatus} from '../consts';
import {Comments} from '../types/comment';

type InitialState = {
  films: Films,
  promoFilm: Film | null
  isDataLoading: boolean,
  authorizationStatus: AuthorizationStatus
  error: string | null,
  currentFilm: Film | null,
  comments: Comments,
  similarFilms: Films
};

const initialState: InitialState = {
  films: [],
  promoFilm: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  error: null,
  comments: [],
  currentFilm: null,
  similarFilms: []
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
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

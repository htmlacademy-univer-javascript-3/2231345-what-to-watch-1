import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../../types/film';
import {Comments} from '../../types/comment';

export const setDataLoadingStatus = createAction<boolean>('films/isDataLoadingStatus');
export const loadFilms = createAction<Films>('films/loadFilms');
export const loadPromoFilm = createAction<Film>('films/loadPromoFilm');
export const loadFilm = createAction<Film>('films/loadFilm');
export const loadComments = createAction<Comments>('films/loadComments');
export const loadSimilarFilms = createAction<Films>('films/loadSimilarFilms');
export const loadFavoriteFilms = createAction<Films>('films/loadFavoriteFilms');
export const setDataLoadingError = createAction<boolean>('films/setDataLoadingError');

import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {AuthorizationStatus} from '../consts';
import {Comments} from '../types/comment';

export const setDataLoadingStatus = createAction<boolean>('data/isDataLoadingStatus');
export const loadFilms = createAction<Films>('data/loadFilms');
export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
export const loadFilm = createAction<Film>('data/loadFilm');
export const loadComments = createAction<Comments>('data/loadComments');
export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

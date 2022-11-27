import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';

export const setDataLoadingStatus = createAction<boolean>('data/isDataLoadingStatus');
export const loadFilms = createAction<Films>('data/loadFilms');

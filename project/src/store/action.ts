import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {AuthorizationStatus} from '../consts';
import {User} from '../types/userData';

export const setDataLoadingStatus = createAction<boolean>('data/isDataLoadingStatus');
export const loadFilms = createAction<Films>('data/loadFilms');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
export const setUser = createAction<User | null>('user/setUser');

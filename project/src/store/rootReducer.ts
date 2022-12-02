import {createReducer} from '@reduxjs/toolkit';
import {loadFilms, setAuthorizationStatus, setDataLoadingStatus, setUser} from './action';
import {Films} from '../types/film';
import {AuthorizationStatus} from '../consts';
import {User} from '../types/userData';

type InitialState = {
  films: Films,
  isDataLoading: boolean,
  user: User | null,
  authorizationStatus: AuthorizationStatus
  error: string | null
};

const initialState: InitialState = {
  films: [],
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoading: false,
  error: null
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
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

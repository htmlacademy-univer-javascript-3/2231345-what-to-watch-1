import {createReducer} from '@reduxjs/toolkit';
import {loadFilms, setDataLoadingStatus} from './action';
import {Films} from '../types/film';


type InitialState = {
  films: Films,
  isDataLoading: boolean,
  error: string | null
};

const initialState: InitialState = {
  films: <Films>[],
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
    });
});

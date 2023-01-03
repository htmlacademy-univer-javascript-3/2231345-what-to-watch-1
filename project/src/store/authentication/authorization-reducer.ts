import {createReducer} from '@reduxjs/toolkit';
import {setAuthorizationStatus, setAuthorizationError} from './action';

import {AuthorizationStatus} from '../../consts';


type AuthorizationState = {
  authorizationStatus: AuthorizationStatus
  authorizationError: string | null,
}


const initialState: AuthorizationState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationError: null,
};

export const authorizationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthorizationError, (state, action) => {
      state.authorizationError = action.payload;
    });
});

import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../consts';


export const setAuthorizationStatus = createAction<AuthorizationStatus>('authentication/setAuthorizationStatus');

export const setAuthorizationError = createAction<string | null>('authentication/setError');

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {filmReducer} from './films/film-reducer';
import {createAPI} from '../client/api';
import {authorizationReducer} from './authentication/authorization-reducer';

const api = createAPI();

export const store = configureStore(
  {
    reducer: combineReducers({filmsState: filmReducer, authorizationState:  authorizationReducer}),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api
        }
      })
  }
);

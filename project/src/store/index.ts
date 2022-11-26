import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import {createAPI} from '../client/api';

const api = createAPI();

export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api
        }
      })
  }
);

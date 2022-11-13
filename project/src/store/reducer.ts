import {createReducer} from '@reduxjs/toolkit';
import {getFilms, setGenre} from './action';
import {films} from '../mocks/films';
import {Genre} from '../consts';

const initialState = {
  genre: Genre.All,
  films: films
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilms, (state) => {
      if (state.genre === Genre.All) {
        state.films = films;
      } else {
        state.films = films.filter((film) => film.genres.find((genre) => genre === state.genre));
      }
    }
    )
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    });
});

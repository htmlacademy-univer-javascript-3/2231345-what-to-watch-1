import {createReducer} from '@reduxjs/toolkit';
import {getFilms, setGenre} from './action';
import {Genre} from '../consts';

const initialState = {
  page: 1,
  size: 8,
  totalCount: films.length,
  genre: Genre.All,
  films: films.slice(0, 8)
};

export const rootReducere = createReducer(initialState, (builder) => {
  builder
    .addCase(getFilms, (state, action) => {
      state.page = action.payload.page;
      state.size = action.payload.size;

      const {page, size} = action.payload;
      const begin = (page - 1) * size;

      if (state.genre === Genre.All) {
        state.films.push(...films.slice(begin, begin + size));
        state.totalCount = films.length;
      } else {
        const filteredFilms = films.filter((film) => film.genres.find((genre) => genre === state.genre));
        state.films.push(...filteredFilms.slice(begin, begin + size));
        state.totalCount = filteredFilms.length;
      }
    }
    )
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
      state.films = [];
    });
});

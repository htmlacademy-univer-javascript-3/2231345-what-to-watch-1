import {createReducer} from '@reduxjs/toolkit';
import {setFilms, setGenre} from './action';

const initialState = {
  totalCount: films.length,
  genre: '',
  films: films.slice(0, 8)
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilms, (state, action) => {
      const {page, size} = action.payload;
      const begin = (page - 1) * size;

      if (!state.genre) {
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

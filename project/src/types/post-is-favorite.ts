import {PayloadAction} from '@reduxjs/toolkit';
import {Film} from './film';

export type PostIsFavorite = {
  isFavorite: boolean,
  filmId: number,
  action: (film: Film) => PayloadAction<Film>
}

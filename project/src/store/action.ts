import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../consts';

export const getFilms = createAction('films/getFilms');
export const setGenre = createAction<{genre: Genre}>('films/setGenre');

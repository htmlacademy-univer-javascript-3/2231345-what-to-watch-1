import {createAction} from '@reduxjs/toolkit';

export const setFilms = createAction<{page: number, size: number}>('films/setFilms');
export const setGenre = createAction<{genre: string}>('films/setGenre');

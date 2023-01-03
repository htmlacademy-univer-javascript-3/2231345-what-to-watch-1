import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../../types/state';
import {Film, Films} from '../../types/film';
import {APIRoute, AuthorizationStatus} from '../../consts';
import {
  loadComments, loadFavoriteFilms,
  loadFilm,
  loadFilms,
  loadPromoFilm,
  loadSimilarFilms,
  setDataLoadingStatus,
} from '../films/action';
import {UserData} from '../../types/userData';
import {AuthData} from '../../types/auth-data';
import {Comments} from '../../types/comment';
import {dropUser, saveUser} from '../../components/services/user-data';
import {setAuthorizationStatus} from '../authentication/action';
import {PostIsFavorite} from '../../types/post-is-favorite';


export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilms(data));
    dispatch(setDataLoadingStatus(false));
    return data;
  },
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
    dispatch(setDataLoadingStatus(false));
    return data;
  },
);

export const fetchFilmWithExtrasAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmWithExtrasById',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const film = await api.get<Film>(`${APIRoute.Films}/${_arg}`);
    dispatch(loadFilm(film.data));
    const comments = await api.get<Comments>(`${APIRoute.Comments}/${_arg}`);
    dispatch(loadComments(comments.data));
    const similarFilms = await api.get<Films>(`${APIRoute.Films}/${_arg}/${APIRoute.Similar}`);
    dispatch(loadSimilarFilms(similarFilms.data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveUser(data);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropUser();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const postCommentAction = createAsyncThunk<Comments, { comment: string, rating: number, filmId: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postComment',
  async (_arg, {dispatch, extra: api}) => await api.post(`${APIRoute.Comments}/${_arg.filmId}`, {
    comment: _arg.comment,
    rating: _arg.rating
  })
);

export const postIsFavoriteAction = createAsyncThunk<Film, PostIsFavorite, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/postIsFavorite',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.Favorite}/${_arg.filmId}/${_arg.isFavorite ? 1 : 0}`);
    dispatch(_arg.action(data));
    return data;
  }
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/getFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Favorite}`);
    dispatch(loadFavoriteFilms(data));
    return data;
  }
);


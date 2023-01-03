import {AppRoute, AuthorizationStatus} from '../../consts';
import {postIsFavoriteAction} from '../../store/api-actions/api-actions';
import {Film, Films} from '../../types/film';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {PayloadAction} from '@reduxjs/toolkit';

type AddFavoriteButtonProps = {
  film: Film,
  favoriteFilms: Films,
  action: (film: Film) => PayloadAction<Film>
}

export function AddFavoriteButton({film, favoriteFilms, action}: AddFavoriteButtonProps) {
  const authorizationStatus = useAppSelector<AuthorizationStatus>((state) => state.authorizationState.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onAddButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.SignIn);
    }

    dispatch(postIsFavoriteAction({
      isFavorite: !film.isFavorite,
      filmId: film.id,
      action: action
    }));
  };
  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onAddButtonClick}>
      {
        film.isFavorite ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
      }
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

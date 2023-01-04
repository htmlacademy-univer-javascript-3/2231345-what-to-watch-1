import FilmsList from '../../components/films-list/films-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Logo from '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';
import {Films} from '../../types/film';
import {useEffect} from 'react';
import {fetchFavoriteFilmsAction} from '../../store/api-actions/api-actions';

function MyListScreen(): JSX.Element {
  const films = useAppSelector<Films>((state) => state.filmsState.favoriteFilms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLight={false}/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{films.length}</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>

      <footer className="page-footer">
        <Logo isLight/>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyListScreen;

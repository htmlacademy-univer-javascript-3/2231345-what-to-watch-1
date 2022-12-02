import Logo from '../../components/logo/logo';
import {Link, useParams} from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import {useAppDispatch, useAppSelector} from '../../hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {UserBlock} from '../../components/user-block/user-block';
import LoadingScreen from '../loading-screen/loading-screen';
import FilmsList from '../../components/films-list/films-list';
import {useEffect} from 'react';
import {fetchFilmWithExtrasAction} from '../../store/api-actions/api-actions';
import {AuthorizationStatus} from '../../consts';

function FilmPageScreen(): JSX.Element {
  const {id} = useParams();
  const filmId = Number(id);
  const {currentFilm, isDataLoading, similarFilms, authorizationStatus} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!currentFilm || currentFilm.id !== filmId) {
      dispatch(fetchFilmWithExtrasAction(filmId));
    }
  }, []);

  if (isDataLoading) {
    return <LoadingScreen/>;
  }

  if (!currentFilm) {
    return <NotFoundScreen/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLight={false}/>
            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <Link to={`/films/${currentFilm.id}/review`} className="btn film-card__button">Add review</Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm.posterImage} alt={`${currentFilm.name} poster`} width="218" height="327"/>
            </div>

            <Tabs/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={similarFilms}/>

        </section>

        <footer className="page-footer">
          <Logo isLight/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FilmPageScreen;

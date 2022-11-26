import {Film} from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import {Link, useNavigate} from 'react-router-dom';
import {AppRoute} from '../../consts';
import Logo from '../../components/logo/logo';
import GenresList from '../../components/genres-list/genres-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setFilms, setGenre} from '../../store/action';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {useState} from 'react';

export type MainScreenProps = {
  headerFilm: Film
}

function MainScreen({headerFilm}: MainScreenProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {totalCount, films} = useAppSelector((state) => state);
  const [page, setPage] = useState({number: 1, size: 8});

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isLight={false}/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={headerFilm.poster} alt={`${headerFilm.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{headerFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{headerFilm.genres.join(' ')}</span>
                <span className="film-card__year">{headerFilm.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button"
                  onClick={() => navigate(`/player/${headerFilm.id}`)}
                >
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {
            <GenresList onItemClick={(genre) => {
              dispatch(setGenre({genre}));
              dispatch(setFilms({page: 1, size: 8}));
            }}
            />
          }

          <FilmsList films={films}/>

          {page.number * page.size < totalCount &&
            <ShowMoreButton onClick={() => {
              dispatch(setFilms({page: page.number + 1, size: page.size}));
              setPage({number: page.number + 1, size: page.size});
            }}
            />}

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


export default MainScreen;

import {Films} from '../../types/film';
import FilmsList from '../../components/films-list/films-list';
import {useNavigate} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import GenresList from '../../components/genres-list/genres-list';
import {useAppSelector} from '../../hooks';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {useEffect, useState} from 'react';
import {UserBlock} from '../../components/user-block/user-block';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {FilmsState} from '../../store/films/film-reducer';

function MainScreen() {
  const pageSize = 8;

  const navigate = useNavigate();
  const {films, promoFilm} = useAppSelector<FilmsState>((state) => state.filmsState);
  const [page, setPage] = useState({count: 0, totalCount: 0, films: [] as Films});
  const [currentGenre, setCurrentGenre] = useState<string | null>(null);

  const filterFilms = (count: number, genre: string | null) => {
    const filteredFilms = films.filter((film) => !genre || film.genre === genre);
    return {currentFilms: filteredFilms.slice(0, count), totalCount: filteredFilms.length};
  };

  useEffect(() => {
    const {currentFilms, totalCount} = filterFilms(pageSize, currentGenre);
    setPage({count: 8, totalCount: totalCount, films: currentFilms});
  }, [currentGenre, films]);

  if (!promoFilm) {
    return <NotFoundScreen/>;
  }

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isLight={false}/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${promoFilm.id}`)}>
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


          <GenresList onItemClick={(genre) => {
            setCurrentGenre(genre);
          }}
          />


          <FilmsList films={page.films}/>

          {page.count < page.totalCount &&
            <ShowMoreButton onClick={() => {
              const {currentFilms, totalCount} = filterFilms(page.count + pageSize, currentGenre);
              setPage({count: page.count + pageSize, totalCount: totalCount, films: currentFilms});
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

import Logo from '../../components/logo/logo';
import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../consts';
import Tabs from '../../components/tabs/tabs';
import {useAppSelector} from '../../hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function FilmPageScreen(): JSX.Element {
  const {id} = useParams();
  const filmId = Number(id);
  const film = useAppSelector((state) => state.films.find((f) => f.id === filmId));

  if (!film){
    return <NotFoundScreen/>;
  }
  else {
    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name}/>
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
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
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
                  <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
              </div>

              <Tabs film={film}/>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                    alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"
                  />
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of
                    Grindelwald
                  </a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">Macbeth</a>
                </h3>
              </article>

              <article className="small-film-card catalog__films-card">
                <div className="small-film-card__image">
                  <img src="img/aviator.jpg" alt="Aviator" width="280" height="175"/>
                </div>
                <h3 className="small-film-card__title">
                  <a className="small-film-card__link" href="film-page.html">Aviator</a>
                </h3>
              </article>
            </div>
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
}

export default FilmPageScreen;

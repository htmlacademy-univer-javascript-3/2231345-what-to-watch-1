import Logo from '../../components/logo/logo';
import {Link, useParams} from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import {AppRoute} from '../../consts';
import {useAppSelector} from '../../hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function AddReviewScreen(): JSX.Element {
  const {id} = useParams();
  const filmId = Number(id);
  const film = useAppSelector((state) => state.films.find((f) => f.id === filmId));

  if (!film) {
    return <NotFoundScreen/>;
  } else {
    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">

            <Logo isLight={false}/>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${film.id}/`} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

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

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218"
              height="327"
            />
          </div>
        </div>

        <CommentForm/>

      </section>
    );
  }
}

export default AddReviewScreen;

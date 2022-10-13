import Logo from '../../components/logo/logo';
import {Link} from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import {AppRoute} from '../../consts';

type AddReviewScreenProps = {
  poster: string,
  name: string
  id: string
}

function AddReviewScreen({id, poster, name}: AddReviewScreenProps): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={poster} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <Logo isLight={false}/>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}/`} className="breadcrumbs__link">{name}</Link>
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
          <img src={poster} alt={`${name} poster`} width="218"
            height="327"
          />
        </div>
      </div>

      <CommentForm/>

    </section>
  );
}

export default AddReviewScreen;

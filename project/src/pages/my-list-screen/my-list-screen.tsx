import FilmsList from '../../components/films-list/films-list';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {useAppSelector} from '../../hooks';
import Logo from '../../components/logo/logo';

function MyListScreen(): JSX.Element {
  const {films} = useAppSelector((state) => state);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLight={false}/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

import FilmsList from '../../components/films-list/films-list';
import {useAppSelector} from '../../hooks';
import Logo from '../../components/logo/logo';
import {UserBlock} from '../../components/user-block/user-block';
import {Films} from '../../types/film';

function MyListScreen(): JSX.Element {
  const films = useAppSelector<Films>((state) => state.filmsState.films);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLight={false}/>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
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

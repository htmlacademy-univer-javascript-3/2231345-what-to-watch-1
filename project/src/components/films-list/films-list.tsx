import {Film} from '../../types/film';
import FilmCard from '../film-card/film-card';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({films}: FilmsListProps) {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film}/>)}
    </div>
  );
}

export default FilmsList;

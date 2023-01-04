import {Films} from '../../types/film';
import FilmsList from '../films-list/films-list';

type SimilarFilmsListProps = {
  similarFilms: Films
}

export function SimilarFilmsList({similarFilms}: SimilarFilmsListProps) {
  const films = similarFilms.slice(0, 4);
  return FilmsList({films});
}

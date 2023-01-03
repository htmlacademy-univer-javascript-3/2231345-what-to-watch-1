import {useAppSelector} from '../../hooks';
import {Films} from '../../types/film';


type GenresListProps = {
  onItemClick: (genre: string | null) => void
}


export default function GenresList({onItemClick}: GenresListProps) {
  const films = useAppSelector<Films>((state) => state.filmsState.films);
  const genres = new Map<string, string | null>();
  for (const film of films) {
    genres.set(film.genre, film.genre);
  }
  const sortedGenres = [...genres].sort((fGenre, sGenre) => fGenre[0] < sGenre[0] ? -1 : 1);
  sortedGenres.unshift(['All', null]);
  return (
    <ul className="catalog__genres-list">
      {
        sortedGenres.map((genre) =>
          (
            <li key={genre[0]} className="catalog__genres-item catalog__genres-item--active">
              <button onClick={() => onItemClick(genre[1])} className="catalog__genres-link">{genre[0]}</button>
            </li>
          )
        )
      }
    </ul>
  );
}

import {useAppSelector} from '../../hooks';


type GenresListProps = {
  onItemClick: (genre: string) => void
}

export default function GenresList({onItemClick}: GenresListProps) {
  const films = useAppSelector((state) => state.films);
  const genres = new Set<string>();
  for (const film of films) {
    film.genres.forEach((genre) => genres.add(genre));
  }

  return (
    <ul className="catalog__genres-list">
      {
        [...genres].sort().map((genre) =>
          (
            <li key={genre} className="catalog__genres-item catalog__genres-item--active">
              <button onClick={() => onItemClick(genre)} className="catalog__genres-link">{genre}</button>
            </li>
          )
        )
      }
    </ul>
  );
}

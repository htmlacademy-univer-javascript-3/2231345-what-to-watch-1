import {Genre} from '../../consts';

type GenresListProps = {
  onItemClick: (genre: Genre) => void
}

export default function GenresList({onItemClick}: GenresListProps) {
  return (
    <ul className="catalog__genres-list">
      {
        Object.values<Genre>(Genre).map((genre) =>
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

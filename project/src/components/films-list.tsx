import {Film} from '../types/film';
import FilmCard from './film-card/film-card';
import {useState} from 'react';

type FilmsListProps = {
  films: Film[]
}

function FilmsList({films}: FilmsListProps) {
  const [, setId] = useState('');

  const mouseEnterHandle = (id: string) => setId(id);

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} onMouseEnter={mouseEnterHandle} {...film}/>)}
    </div>
  );
}

export default FilmsList;

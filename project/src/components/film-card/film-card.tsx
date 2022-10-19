import {Link} from 'react-router-dom';

type FilmCardProps = {
  id: string
  poster: string
  name: string
  onMouseEnter: (id: string) => void
}

function FilmCard({id, onMouseEnter, poster, name} : FilmCardProps) : JSX.Element {

  return (
    <article onMouseEnter={() => onMouseEnter(id)} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={poster} alt={name} width="280" height="175"/>

      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;

import {Film} from '../../../types/film';

type OverviewProps = {
  film: Film
}

function Overview({film}: OverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.rating} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film.starring.slice(0, 4).join(', ')} and others</strong></p>
      </div>
    </>
  );
}

export default Overview;

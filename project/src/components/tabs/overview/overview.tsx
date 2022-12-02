import {useAppSelector} from '../../../hooks';
import NotFoundScreen from '../../../pages/not-found-screen/not-found-screen';

function Overview() {
  const {currentFilm} = useAppSelector((state) => state);

  if (!currentFilm){
    return <NotFoundScreen/>;
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{currentFilm.rating} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm.description}</p>
        <p className="film-card__director"><strong>Director: {currentFilm.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {currentFilm.starring.slice(0, 4).join(', ')} and others</strong></p>
      </div>
    </>
  );
}

export default Overview;

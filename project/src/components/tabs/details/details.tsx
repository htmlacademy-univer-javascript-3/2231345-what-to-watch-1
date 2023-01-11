type DetailsProps = {
  director: string,
  starring: string[],
  runTime: number,
  genre: string,
  released: number
}

function Details({director, runTime, starring, genre, released}: DetailsProps) {
  const convertTime = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours === 0 ? `${minutes}m` : `${hours}h ${minutes}m`;
  };

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <div className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <div className="film-card__details-value">
            {starring.map((star) => (<p key={star}>{star}</p>))}
          </div>
        </div>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{convertTime(runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;

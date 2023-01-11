type OverviewProps = {
  rating: number,
  scoresCount: number,
  description: string,
  director: string,
  starring: string[]
}

function Overview({rating, description, director, scoresCount, starring}: OverviewProps) {


  const getScoreDescription = (score: number) => {
    if (0 <= score && score < 3) {
      return 'Bad';
    }
    if (3 <= score && score < 5) {
      return 'Normal';
    }
    if (5 <= score && score < 8) {
      return 'Good';
    }
    if (8 <= score && score < 10) {
      return 'Very good';
    }
    if (10 <= score) {
      return 'Awesome';
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getScoreDescription(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {starring.slice(0, 4).join(', ')} and others</strong>
        </p>
      </div>
    </>
  );
}

export default Overview;

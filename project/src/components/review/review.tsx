type ReviewProps = {
  author: string,
  text: string,
  date: string,
  rating: number
}

function Review({author, text, date, rating}: ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime="2015-11-18">{date}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default Review;

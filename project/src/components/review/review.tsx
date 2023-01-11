import {Comment} from '../../types/comment';

type ReviewProps = {
  comment: Comment
}

function Review({comment}: ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date">{new Date(comment.date).toLocaleDateString('en-GB')}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

export default Review;

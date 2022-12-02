import {Comment} from '../../../types/comment';
import ReviewComponent from '../../review/review';

type ReviewsProps = {
  comments: Comment[]
}

function Reviews({comments}: ReviewsProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => <ReviewComponent key={comment.id} comment={comment}/>)}
      </div>
    </div>
  );
}

export default Reviews;

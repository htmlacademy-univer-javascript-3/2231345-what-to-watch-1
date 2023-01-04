import ReviewComponent from '../../review/review';
import {Comments} from '../../../types/comment';

type ReviewsProps = {
  reviews: Comments
}

function Reviews({reviews} : ReviewsProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <ReviewComponent key={review.id} comment={review}/>)}
      </div>
    </div>
  );
}

export default Reviews;

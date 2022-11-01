import {Review} from '../../../types/review';
import ReviewComponent from '../../review/review';

type ReviewsProps = {
  reviews: Review[]
}

function Reviews({reviews}: ReviewsProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => <ReviewComponent key={review.id} {...review}/>)}
      </div>
    </div>
  );
}

export default Reviews;

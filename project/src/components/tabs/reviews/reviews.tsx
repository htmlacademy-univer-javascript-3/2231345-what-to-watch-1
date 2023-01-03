import ReviewComponent from '../../review/review';
import {useAppSelector} from '../../../hooks';
import {Comments} from '../../../types/comment';

function Reviews() {
  const comments = useAppSelector<Comments>((state) => state.filmsState.comments);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => <ReviewComponent key={comment.id} comment={comment}/>)}
      </div>
    </div>
  );
}

export default Reviews;

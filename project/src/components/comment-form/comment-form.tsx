import {ChangeEvent, FormEvent, useRef, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {postCommentAction} from '../../store/api-actions/api-actions';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {useNavigate} from 'react-router-dom';
import {Film} from '../../types/film';

type CommentFormProps = {
  film: Film
}

function CommentForm({film}: CommentFormProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [filmRating, setRating] = useState(0);
  const [commentIsValid, setCommentIsValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!film) {
    return <NotFoundScreen/>;
  }

  const handleOnRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleOnCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = evt.target.value.length;
    setCommentIsValid(50 <= comment && comment <= 400);
  };


  const onSubmit = (comment: string, rating: number) => {
    dispatch(postCommentAction({comment: comment, rating: rating, filmId: film.id}))
      .then(() => navigate(`/films/${film.id}`, {replace: true}));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (filmRating && commentRef.current?.value) {
      setIsSubmitting(true);
      onSubmit(commentRef.current.value, filmRating);
      setIsSubmitting(false);
    }
  };

  const ratingIsValid = () => 0 < filmRating && filmRating <= 10;


  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <fieldset style={{border: 'none'}} disabled={isSubmitting}>
          <div className="rating">
            <div className="rating__stars">
              {
                Array(10).fill(1).map((_, i) =>
                  (
                    <>
                      <input key={`star-${10 - i}`} className="rating__input" id={`star-${10 - i}`} type="radio"
                        name="rating"
                        onChange={handleOnRatingChange} value={`${10 - i}`}
                      />
                      <label className="rating__label" htmlFor={`star-${10 - i}`}>Rating ${10 - i}</label>
                    </>
                  )
                )
              }
            </div>
          </div>

          <div className="add-review__text">
            <textarea ref={commentRef} className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text" minLength={50} maxLength={400} onChange={handleOnCommentChange}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit"
                disabled={!commentIsValid || !ratingIsValid() || isSubmitting}
              >Post
              </button>
            </div>

          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default CommentForm;

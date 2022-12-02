import {ChangeEvent, FormEvent, useRef, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postCommentAction} from '../../store/api-actions/api-actions';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import {useNavigate} from 'react-router-dom';

function CommentForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {currentFilm} = useAppSelector((state) => state);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const [filmRating, setRating] = useState(0);

  if (!currentFilm) {
    return <NotFoundScreen/>;
  }

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const onSubmit = (comment: string, rating: number) => {
    dispatch(postCommentAction({comment: comment, rating: rating, filmId: currentFilm.id}))
      .then(() => navigate(`/films/${currentFilm.id}`, {replace: true}))
      .catch((error) => error.toString());
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (filmRating && commentRef.current?.value) {
      onSubmit(commentRef.current.value, filmRating);
    }
  };


  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {
              Array(10).fill(1).map((i) =>
                (
                  <>
                    <input key={`star-${10 - i}`} className="rating__input" id={`star-${10 - i}`} type="radio" name="rating"
                      onChange={handleOnChange} value={`${10 - i}`}
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
            placeholder="Review text"
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CommentForm;

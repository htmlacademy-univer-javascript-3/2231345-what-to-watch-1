import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import VideoPlayer from '../video-player/video-player';
import {Film} from '../../types/film';

type FilmCardProps = {
  film: Film
}

function FilmCard({film}: FilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const navigate = useNavigate();

  const onMouseEnterHandle = () => {
    setTimeoutId(setTimeout(setIsPlaying, 1000, true));
  };

  const onMouseLeaveHandle = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    setIsPlaying(false);
  };

  return (
    <article onMouseEnter={onMouseEnterHandle} onMouseLeave={onMouseLeaveHandle}
      onClick={() => navigate(`/films/${film.id}`)}
      className="small-film-card catalog__films-card"
    >
      {isPlaying
        ? <VideoPlayer height={175} width={280} poster={film.posterImage} src={film.previewVideoLink} muted/>
        :
        <>
          <div className="small-film-card__image">
            <img src={film.posterImage} alt={film.name} width="280" height="175"/>

          </div>
          <h3 className="small-film-card__title">
            {film.name}
          </h3>
        </>}
    </article>
  );
}

export default FilmCard;

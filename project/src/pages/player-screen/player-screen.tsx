import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../consts';
import {useAppSelector} from '../../hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {Film} from '../../types/film';
import {useEffect, useRef, useState} from 'react';

function PlayerScreen(): JSX.Element {
  const {id} = useParams();
  const filmId = Number(id);
  const film = useAppSelector((state) => state.filmsState.films.find((f: Film) => f.id === filmId));

  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const onPlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (playerRef.current !== null) {
      if (isPlaying) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  }, [isPlaying]);

  if (!film) {
    return <NotFoundScreen/>;
  } else {
    return (
      <div className="player">
        <video ref={playerRef} src={film.videoLink} className="player__video" poster={film.posterImage}></video>

        <Link to={AppRoute.Main}>
          <button type="button" className="player__exit">Exit</button>
        </Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={onPlayButtonClick}
            >
              {isPlaying ? (
                <>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </>
              )}
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerScreen;

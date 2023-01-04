import {Link, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import {useEffect, useRef, useState} from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import {Film} from '../../types/film';
import {fetchFilm} from '../../store/api-actions/api-actions';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

function PlayerScreen(): JSX.Element {
  const filmId = Number(useParams().id);
  const currentFilm = useAppSelector<Film>((state) => state.filmsState.currentFilm);
  const isDataLoading = useAppSelector<boolean>((state) => state.filmsState.isDataLoading);

  const playerRef = useRef<HTMLVideoElement | null>(null);
  const playerElement = document.querySelector('.player');
  const dispatch = useAppDispatch();

  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState(currentFilm ? currentFilm?.runTime * 60 : 0);

  const onPlayButtonClick = () => {
    setIsPlaying(!isPlaying);
  };

  dayjs.extend(duration);

  const getProgress = () => {
    if (!currentFilm) {
      return 0;
    }
    return (currentFilm?.runTime * 60 - timeLeft) / (currentFilm?.runTime * 60) * 100;
  };

  const onFullScreenButtonClick = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      playerElement?.requestFullscreen();
    }
  };

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
  });

  useEffect(() => {
    if (playerRef.current !== null) {
      if (isPlaying) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (currentFilm?.id !== filmId) {
      dispatch(fetchFilm(filmId));
    }
  }, [filmId, currentFilm?.id, dispatch]);

  useEffect(() => {
    if (currentFilm) {
      setTimeLeft(currentFilm?.runTime * 60);
    }
  }, [currentFilm]);

  if (isDataLoading) {
    return <LoadingScreen/>;
  } else if (!currentFilm) {
    return <NotFoundScreen/>;
  } else {
    return (
      <div className="player">
        <video ref={playerRef} src={currentFilm.videoLink} className="player__video"
          poster={currentFilm.posterImage} autoPlay
        >
        </video>

        <Link to={`/films/${currentFilm?.id}`} type="button" className="player__exit">Exit</Link>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={getProgress()} max="100"></progress>
              <div className="player__toggler" style={{left: `${getProgress()}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">
              {
                dayjs
                  .duration(timeLeft || 0, 'seconds')
                  .format(`${timeLeft || 0 > 3600 ? 'H[:]m[:]ss' : 'm[:]ss'}`)
              }
            </div>
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

            <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
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

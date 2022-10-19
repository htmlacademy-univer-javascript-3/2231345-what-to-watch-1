import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

type LogoProps = {
  isLight: boolean
}

function Logo({isLight = false}: LogoProps) {
  return (
    <div className="logo">
      <Link className={`logo__link ${isLight ? 'logo__link--light' : ''}`} to={AppRoute.Main}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;

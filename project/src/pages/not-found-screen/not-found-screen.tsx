import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

function NotFoundScreen(){
  return(
    <div style={{width: '50%', margin: '0 auto', textAlign: 'center'}}>
      <p><strong>404 Not Found</strong></p>
      <Link to={AppRoute.Main}>To Main Page</Link>
    </div>
  );
}

export default NotFoundScreen;

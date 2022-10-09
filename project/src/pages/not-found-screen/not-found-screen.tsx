import {Link} from 'react-router-dom';

function NotFoundScreen(){
  return(
    <>
      <strong>404 Not Found</strong>
      <Link to='/'>To Main Page</Link>
    </>
  );
}

export default NotFoundScreen;

import {AppRoute, AuthorizationStatus} from '../../consts';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const authorizationStatus = useAppSelector<AuthorizationStatus>((state) => state.authorizationState.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}></Navigate>
  );
}

export default PrivateRoute;

import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions/api-actions';
import {getAvatarUri} from '../services/user-data';

export function UserBlock() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector<AuthorizationStatus>((state) => state.authorizationState.authorizationStatus);
  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.Auth
          ?
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src={getAvatarUri()} alt="User avatar" width="63" height="63"
                  onClick={() => navigate(AppRoute.MyList)}
                />
              </div>
            </li>
            <li className="user-block__item">
              <button onClick={() => dispatch(logoutAction())} className="user-block__link">Sign out</button>
            </li>
          </>
          :
          <div className="user-block">
            <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
          </div>
      }

    </ul>
  );
}

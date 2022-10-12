import MainScreen, {MainScreenProps} from '../../pages/main-screen/main-screen';
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import React from 'react';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../consts';
import FilmPageScreen from '../../pages/film-page-screen/film-page-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App(props: MainScreenProps): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<MainScreen name={props.name} releaseYear={props.releaseYear} genre={props.genre}/>}/>
            <Route path='login' element={<SignInScreen/>}/>
            <Route path='mylist' element=
              {
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                  <MyListScreen/>
                </PrivateRoute>
              }
            />
            <Route path='films/:id'>
              <Route index element={<FilmPageScreen/>}/>
              <Route path='review' element={<AddReviewScreen/>}/>
            </Route>
            <Route path='player/:id' element={<PlayerScreen/>}/>
          </Route>
          <Route path='*' element={<NotFoundScreen/>}/>

        </Routes>
      </BrowserRouter>
      <Outlet/>
    </>);
}

export default App;

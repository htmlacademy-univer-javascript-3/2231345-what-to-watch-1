export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  SignOut = '/logout'
}

export enum FilmPageTab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum APIRoute {
  Films = 'films',
  Similar = 'similar',
  Promo = 'promo',
  Favorites = 'favorite',
  Comments = 'comments',
  Login = 'login',
  Logout = 'logout'
}

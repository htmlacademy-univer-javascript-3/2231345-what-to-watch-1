import {UserData} from '../../types/userData';

const AUTH_TOKEN_KEY_NAME = 'what-to-watch-token';
const AVATAR_URI_KEY_NAME = 'what-to-watch-avatar-uri';

export type Token = string;
export type Uri = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const getAvatarUri = (): Uri => {
  const uri = localStorage.getItem(AVATAR_URI_KEY_NAME);
  return uri ?? '';
};

export const saveUser = (user: UserData): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, user.token);
  localStorage.setItem(AVATAR_URI_KEY_NAME, user.avatarUrl);
};

export const dropUser = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  localStorage.removeItem(AVATAR_URI_KEY_NAME);
};

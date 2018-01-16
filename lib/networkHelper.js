import 'whatwg-fetch';
import { SERVER_URL } from './constants';

export const fetchUserData = (id) => {
  return fetch(`${SERVER_URL}/users/${id}`)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('User does not exist.');
    })
    .catch((err) => console.log('error', err));
    ;
}

export const fetchPrograms = () => {
  return fetch(`${SERVER_URL}/programs`)
  .then(response => {
    if (response.ok) return response.json();
    throw new Error('Could not fetch programs.');
  })
  .catch((err) => console.log('error', err));
  ;
}

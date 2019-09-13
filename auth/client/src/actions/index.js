import axios from 'axios';

import { AUTH_USER } from './types';

export const signup = (formProps) => (dispatch) => {
  try {
    const data = axios.post('http://localhost:3090/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: '',
    });
  } catch(e) {
    console.error(e.message);
  }
};

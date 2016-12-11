import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  // the dispatch method is what actually sends it to the reducers
  return (dispatch) => {
    // Start the user loading progress spinner
    dispatch({ type: 'LOGIN_USER_START' });

    const data = { email, password };
    const URL = 'http://localhost:3000/api/v1/user_token';
    // Sign in using JWT Web Token
    axios.post(URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      auth: data
    })
    // Post the credentials to the rails. I am using the Knock gem which
    // expects the data in an auth hash in this form. This will set the
    // JWT token in AsyncStorage on the device.
    .then((res) => {
        AsyncStorage.setItem('jwt', res.data.jwt);
        loginUserSuccess(dispatch);
    })
    .catch(() => {
      loginUserFail(dispatch);
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: 'LOGIN_USER_FAIL' });
};

const loginUserSuccess = (dispatch) => {
  dispatch({ type: 'LOGIN_USER_SUCCESS' });
  Actions.index();
};

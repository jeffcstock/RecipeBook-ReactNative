import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const fetchUser = () => {
  return dispatch => {
    dispatch(fetchingUser());

    axios.get('http://localhost:3000/api/v1/recipes.json')
      .then(response => {
        dispatch(fetchedData(response.data));
      })
      .catch(err => console.log(err));
  };
};

export const fetchingUser = () => {
  return {
    type: 'FETCHING_USER'
  };
};
export const fetchedUser = (user) => {
  return {
    type: 'FETCHED_USER',
    payload: user
  };
};

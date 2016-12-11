import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchingData());
    // getItem gets the items from the rails db for the current user. The req
    // expects the JWT in the header.
    AsyncStorage.getItem('jwt', (err, token) => {
      axios.get('http://localhost:3000/api/v1/recipes.json', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
          dispatch(fetchedData(response.data));
        })
        .catch(error => console.log(error));
    });
  };
};

export const fetchingData = () => {
  return {
    type: 'FETCHING_DATA'
  };
};
export const fetchedData = (recipe) => {
  return {
    type: 'FETCHED_DATA',
    payload: recipe
  };
};

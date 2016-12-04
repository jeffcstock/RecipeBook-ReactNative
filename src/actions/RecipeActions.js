import axios from 'axios';

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchingData());

    axios.get('http://localhost:3000/api/v1/recipes.json')
      .then(response => {
        dispatch(fetchedData(response.data));
      })
      .catch(err => console.log(err));
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

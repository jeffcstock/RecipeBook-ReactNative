const initialState = {
  isLoaded: false,
  isLoading: false,
  recipes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_DATA':
      return { ...state,
        isLoading: true
      };
    case 'FETCHED_DATA':
      return { ...state,
        isLoaded: true,
        isLoading: false,
        recipes: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  isLoaded: false,
  isLoading: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_USER':
      return { ...state,
        isLoading: true
      };
    case 'FETCHED_USER':
      return { ...state,
        isLoaded: true,
        isLoading: false,
        user: action.payload
      };
    default:
      return state;
  }
};

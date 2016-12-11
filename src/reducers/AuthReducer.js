const initialState = {
  email: '',
  password: '',
  error: '',
  loading: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
      case 'EMAIL_CHANGED':
      return { ...state, email: action.payload, error: '' };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload, error: '' };
    case 'LOGIN_USER_START':
      return { ...state, loading: true, error: '' };
    case 'LOGIN_USER_SUCCESS':
      return { ...state, user: action.payload, loading: false };
    case 'LOGIN_USER_FAIL':
      return { ...state, password: '', loading: false, error: 'Incorrect validation' };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  recipes: RecipeReducer,
  auth: AuthReducer
});

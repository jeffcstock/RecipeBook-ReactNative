import { combineReducers } from 'redux';
import RecipeReducer from './RecipeReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  recipes: RecipeReducer,
  user: UserReducer
});

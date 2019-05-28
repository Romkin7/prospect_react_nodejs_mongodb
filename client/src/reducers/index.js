import { combineReducers } from 'redux';
import giftReducer from './giftReducer';

export default combineReducers({
	gift: giftReducer
});
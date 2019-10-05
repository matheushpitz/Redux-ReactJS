import {ADD_ITEM, REMOVE_ITEM} from '../actions';
import { combineReducers } from 'redux';

const itemReducer = (state = [], action) => {
	switch(action.type) {
		case ADD_ITEM:
			return [...state, {
				text: action.text,
				id: action.id
			}];
		case REMOVE_ITEM:
			return state.filter(item => item.id !== action.id);
		default:
			return state;
	}
}

export default combineReducers({
	items: itemReducer
});
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

let itemIndex = 0;

export const addItem = text => {
	return {
		type: ADD_ITEM,
		text: text,
		id: itemIndex++
	};
}

export const removeItem = id => {
	return {
		type: REMOVE_ITEM,
		id: id
	}
}
import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../actions';
import Item from '../presentationals/Item';

const ItemList = ({items, removeItem}) => {
	let mappedItems = items.map(item => {
		return (
			<Item key={item.id} item={item} remove={removeItem} />
		);
	});
	
	return(
		<div>
			{mappedItems}
		</div>		
	);
}

const mapStateToProps = (state, ownProps) => ({
	items: state.items
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	removeItem: id => dispatch(removeItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
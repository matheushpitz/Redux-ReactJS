import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

const Form = ({dispatch}) => {
	let input = React.createRef();
	return (
		<div>
			<input ref={input} />
			<button onClick={() => {
				dispatch(addItem(input.current.value));
				input.current.value = '';
			}} >Add</button>
		</div>
	);
}

export default connect()(Form);

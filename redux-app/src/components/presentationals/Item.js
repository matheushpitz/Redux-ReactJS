import React from 'react';

export default ({item, remove}) => {
	return (
		<div>
			<hr/>
			<p>{item.text}</p>
			<button onClick={() => remove(item.id)}>X</button>
			<hr/>
		</div>
	);
}
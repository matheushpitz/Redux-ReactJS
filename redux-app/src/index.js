import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { addItem, removeItem } from './actions';

const store = createStore(reducers);
const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(addItem('Item'));
store.dispatch(addItem('Item2'));
store.dispatch(removeItem(0));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

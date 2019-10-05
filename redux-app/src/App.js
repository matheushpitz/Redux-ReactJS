import React from 'react';
import Form from './components/containers/Form';
import ItemList from './components/containers/ItemList';

// Got from https://redux.js.org/basics/example

function App() {
  return (
    <div className="App">
      <Form/>
	  <ItemList/>
    </div>
  );
}

export default App;

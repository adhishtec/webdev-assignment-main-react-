import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import ShoppingList from './shoppingList/shoppingList';

function App() {
	const store = configureStore();
	return (
		<Provider store={store}>
			<div className="app">
				<header>
					<div className="app-header">MyFakeStore</div>
				</header>
				<ShoppingList></ShoppingList>
			</div>
		</Provider>
	);
}

export default App;

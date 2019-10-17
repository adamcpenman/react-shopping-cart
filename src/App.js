import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from "../src/contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import { useLocalStorage } from "./utils/useLocalStorage";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage("cart", []);

	const removeItem = id => {
		//const filterCart =
		setCart (cart.filter(cart => cart.id !== id));
		// return setCart(filterCart)
	}

	const addItem = item => {
		// add the given item to the cart
		setCart ([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
			/>

			<Route
				path="/cart"
				component={ShoppingCart}/>
			
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

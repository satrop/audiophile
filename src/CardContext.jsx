import { createContext, useState } from 'react';
import { productsArray, getProductData } from './assets/data';

export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	getTotalCost: () => {},
	deleteAllFromCart: () => {},
	getProductQuantityAll: () => {},
});

export function CartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);

	function getProductQuantity(id) {
		const quantity = cartProducts.find(
			(product) => product.id === id
		)?.quantity;

		if (quantity === undefined) {
			return 0;
		}

		return quantity;
	}

	function addOneToCart(id) {
		const quantity = getProductQuantity(id);

		if (quantity === 0) {
			setCartProducts([
				...cartProducts,
				{
					id: id,
					quantity: 1,
				},
			]);
		} else {
			setCartProducts(
				cartProducts.map((product) =>
					product.id === id
						? { ...product, quantity: product.quantity + 1 }
						: product
				)
			);
		}
	}

	function removeOneFromCart(id) {
		const quantity = getProductQuantity(id);

		if (quantity == 1) {
			deleteFromCart(id);
		} else {
			setCartProducts(
				cartProducts.map((product) =>
					product.id === id
						? { ...product, quantity: product.quantity - 1 }
						: product
				)
			);
		}
	}

	function deleteFromCart(id) {
		setCartProducts((cartProducts) =>
			cartProducts.filter((currentProduct) => {
				return currentProduct.id != id;
			})
		);
	}

	function deleteAllFromCart() {
		setCartProducts((cartProducts) =>
			cartProducts.filter((currentProduct) => {
				return currentProduct != currentProduct;
			})
		);
	}

	function getProductQuantityAll() {
		const quantityAll = cartProducts.find(
			(product) => product === product
		)?.quantityAll;

		if (quantityAll === undefined) {
			return 0;
		}

		return quantityAll;
	}

	function getTotalCost() {
		let totalCost = 0;
		cartProducts.map((cartItem) => {
			const productData = getProductData(cartItem.id);
			totalCost += productData.price * cartItem.quantity;
		});
		return totalCost;
	}

	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addOneToCart,
		removeOneFromCart,
		deleteFromCart,
		getTotalCost,
		deleteAllFromCart,
		getProductQuantityAll,
	};
	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;

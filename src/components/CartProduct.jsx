import { useContext } from 'react';
import { CartContext } from '../CardContext';
import { getProductData } from '../assets/data';

const CartProduct = (props) => {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);

	return (
		<div className="card--cart">
			<h3>{productData.name}</h3>
			<p>{quantity} total</p>
			<p>${(quantity * productData.price).toFixed(2)}</p>

			<button onClick={() => cart.addOneToCart(productData.id)}>+</button>
			<button onClick={() => cart.removeOneFromCart(productData.id)}>
				-
			</button>

			<hr />
		</div>
	);
};

export default CartProduct;

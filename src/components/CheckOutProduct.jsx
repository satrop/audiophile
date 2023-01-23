import { useContext } from 'react';
import { CartContext } from '../CardContext';
import { getProductData } from '../assets/data';

const CheckOutProduct = (props) => {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);
	const productQuantity = cart.getProductQuantity(productData.id);

	return (
		<>
			<button onClick={() => cart.deleteAllFromCart(id)}>Remove</button>
			<div className="card--cart">
				<h3>{productData.name}</h3>
				<p>{quantity} total</p>
				<p>${(quantity * productData.price).toFixed(2)}</p>
				<div>In Cart: {productQuantity}</div>
				<button onClick={() => cart.addOneToCart(productData.id)}>
					+
				</button>
				<button onClick={() => cart.removeOneFromCart(productData.id)}>
					-
				</button>
				<button onClick={() => cart.deleteFromCart(id)}>Remove</button>
				<hr />
			</div>
		</>
	);
};

export default CheckOutProduct;

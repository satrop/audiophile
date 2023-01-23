import CheckOutProduct from '../components/CheckOutProduct';
import { CartContext } from '../CardContext';
import { useContext } from 'react';

const MiniCheckOutProduct = () => {
	const cart = useContext(CartContext);
	const productsCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	return (
		<>
			{productsCount > 0 ? (
				<>
					<p>Items in cart:</p>
					{cart.items.map((currentProduct, idx) => (
						<CheckOutProduct
							key={idx}
							id={currentProduct.id}
							quantity={currentProduct.quantity}
						/>
					))}

					<h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
					<button>Purchase Items!</button>
					<button onClick={() => cart.deleteFromCart(id)}>
						Remove
					</button>
				</>
			) : (
				<h1>There are no items in your cart</h1>
			)}
		</>
	);
};

export default MiniCheckOutProduct;

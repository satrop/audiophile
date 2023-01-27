import { useEffect } from 'react';
import { CartContext } from '../CardContext';
import { useContext } from 'react';

import CheckOutProduct from '../components/CheckOutProduct/CheckOutProduct';

import '../SASS/Pages/checkout.scss';

const Checkout = () => {
	useEffect(() => {
		document.body.classList.add('checkout');
		return () => {
			document.body.classList.remove('checkout');
		};
	}, []);

	const cart = useContext(CartContext);
	const productsCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	return (
		<main>
			<div className="checkout content">
				<form action="#">--form--</form>
				<div className="summary">
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
						<div>
							<h1>There are no items in your cart</h1>
							<h2>Checkout</h2>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default Checkout;

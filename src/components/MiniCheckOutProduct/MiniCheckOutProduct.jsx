import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
import { CartContext } from '../../CardContext';
import { useContext } from 'react';
import { getProductData } from '../../assets/data';
import { Link } from 'react-router-dom';

import './MiniCheckOutProduct.scss';
import Checkout from '../../pages/Checkout';

const MiniCheckOutProduct = (props) => {
	const cart = useContext(CartContext);
	const id = props.id;
	const productsCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	const test = props.isOpen ? 'isOpen' : ' ';

	return (
		<div className={`mini-cart ${props.extraClass}`}>
			{productsCount > 0 ? (
				<>
					<div className="mini-cart__header">
						<div>Cart ({productsCount})</div>
						<button
							className="mini-remove"
							onClick={() => cart.deleteAllFromCart(id)}>
							Remove All
						</button>
					</div>
					{cart.items.map((currentProduct, idx) => (
						<CheckOutProduct
							key={idx}
							id={currentProduct.id}
							quantity={currentProduct.quantity}
						/>
					))}
					<p className="product-total">
						<span>Total</span>
						<span>${cart.getTotalCost().toFixed(2)}</span>
					</p>
					<Link
						to="/checkout"
						onClick={props.do}
						className="checkout button">
						Checkout
					</Link>
				</>
			) : (
				<p>There are no items in your cart</p>
			)}
		</div>
	);
};

export default MiniCheckOutProduct;

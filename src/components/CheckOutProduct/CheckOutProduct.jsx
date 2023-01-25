import { useContext } from 'react';
import { CartContext } from '../../CardContext';
import { getProductData } from '../../assets/data';

const CheckOutProduct = (props) => {
	const cart = useContext(CartContext);
	const id = props.id;
	const quantity = props.quantity;
	const productData = getProductData(id);
	const productQuantity = cart.getProductQuantity(productData.id);
	const smImg = productData.image.mobile;
	var shortName = productData.name;
	var lastIndex = shortName.lastIndexOf(' ');
	shortName = shortName.substring(0, lastIndex);

	return (
		<div className="card--cart">
			<div className="mini-cart-layout">
				<div className="product-image">
					<img
						className="border-radius"
						src={smImg}
						alt={productData.name}
					/>
				</div>

				<div className="product-details">
					<p className="hide-from-mini-cart product-name">
						{productData.name}
					</p>
					<p className="mini-cart-product-name">{shortName}</p>
					<p className="product-price">
						${productData.price.toFixed(2)}
					</p>
				</div>

				<div className="product-controls">
					<button
						className="product-minus"
						onClick={() => cart.removeOneFromCart(productData.id)}>
						-
					</button>
					<p className="product-quantity">
						{quantity} <span>total</span>
					</p>
					<button
						className="product-add"
						onClick={() => cart.addOneToCart(productData.id)}>
						+
					</button>
				</div>
			</div>

			<p className="hide-from-mini-cart product-total">
				<span className="product-total-title">Total</span>
				<span>${(quantity * productData.price).toFixed(2)}</span>
			</p>

			<div className="hide-from-mini-cart cart-total">
				In Cart: {productQuantity}
			</div>

			<button
				className="hide-from-mini-cart cart-remove"
				onClick={() => cart.deleteFromCart(id)}>
				Remove
			</button>
		</div>
	);
};

export default CheckOutProduct;

import { CartContext } from '../CardContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
	const product = props.product;
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(product.id);
	let newProduct;
	if (product.new === true) {
		newProduct = 'New Thing!';
	}

	return (
		<div className="card">
			<div className="card__body">
				{newProduct && <div className="card__badge">{newProduct}</div>}
				<div className="card__title">{product.name}</div>
				<div className="card__price">${product.price}</div>

				<Link to={'/products/' + product.id}>{product.name}</Link>

				{productQuantity > 0 ? (
					<>
						<div>In Cart: {productQuantity}</div>
						<button onClick={() => cart.addOneToCart(product.id)}>
							+
						</button>
						<button
							onClick={() => cart.removeOneFromCart(product.id)}>
							-
						</button>
						<button onClick={() => cart.deleteFromCart(product.id)}>
							Remove From Cart
						</button>
					</>
				) : (
					<button onClick={() => cart.addOneToCart(product.id)}>
						Add to cart
					</button>
				)}
			</div>
		</div>
	);
};

export default ProductCard;

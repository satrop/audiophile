import { useEffect } from 'react';
import { CartContext } from '../CardContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import GoBack from '../components/GoBack';
import CheckOutProduct from '../components/CheckOutProduct/CheckOutProduct';
import codIcon from '/assets/checkout/icon-cash-on-delivery.svg';

import '../SASS/Pages/cart.scss';
import { Link } from 'react-router-dom';

const Cart = () => {
	useEffect(() => {
		document.body.classList.add('cart');
		return () => {
			document.body.classList.remove('cart');
		};
	}, []);

	const cart = useContext(CartContext);
	const productsCount = cart.items.reduce(
		(sum, product) => sum + product.quantity,
		0
	);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	const [status, setStatus] = useState(0);

	const radioHandler = (status) => {
		setStatus(status);
	};

	const shipping = 50;
	let taxRate = 20;

	const [payment, setPayment] = useState(false);

	const paymentClick = () => {
		setPayment((prevActive) => !prevActive);
	};

	const closePayment = () => {
		setPayment(false);
	};

	return (
		<main>
			<GoBack />
			<div className="content">
				<div className="form-wrapper">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="inner-form-wrapper">
							<h1>Checkout</h1>
							<div className="form-section">
								<div className="overline">Billing details</div>
								<div className="split">
									<div
										className={`form-element ${
											errors.name ? 'is-invalid' : ''
										}`}>
										<div className="label-and-error">
											<label htmlFor="name">Name</label>
											{errors?.name?.type ===
												'required' && (
												<p className="error-message">
													This field is required
												</p>
											)}
										</div>
										<input
											{...register('name', {
												required: true,
											})}
											type="text"
											aria-invalid={
												errors.name ? 'true' : 'false'
											}
										/>
									</div>
									<div
										className={`form-element ${
											errors.email ? 'is-invalid' : ''
										}`}>
										<div className="label-and-error">
											<label htmlFor="email">Email</label>
											{errors?.email?.type ===
												'required' && (
												<p className="error-message">
													This field is required
												</p>
											)}
											{errors?.email?.type ===
												'pattern' && (
												<p className="error-message">
													Wrong format
												</p>
											)}
										</div>
										<input
											{...register('email', {
												required: true,
												pattern:
													/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
											})}
											type="email"
											aria-invalid={
												errors.email ? 'true' : 'false'
											}
										/>
									</div>
									<div
										className={`form-element ${
											errors.phone ? 'is-invalid' : ''
										}`}>
										<div className="label-and-error">
											<label htmlFor="phone">
												Phone Number
											</label>
											{errors?.phone?.type ===
												'required' && (
												<p className="error-message">
													This field is required
												</p>
											)}
										</div>
										<input
											{...register('phone', {
												required: true,
											})}
											type="phone"
											aria-invalid={
												errors.phone ? 'true' : 'false'
											}
										/>
									</div>
								</div>
							</div>
							<div className="form-section">
								<div className="overline">Shipping Info</div>
								<div
									className={`form-element ${
										errors.name ? 'is-invalid' : ''
									}`}>
									<div className="label-and-error">
										<label htmlFor="address">Address</label>
										{errors?.address?.type ===
											'required' && (
											<p className="error-message">
												This field is required
											</p>
										)}
									</div>
									<input
										{...register('address', {
											required: true,
										})}
										type="text"
										aria-invalid={
											errors.address ? 'true' : 'false'
										}
									/>
								</div>
								<div className="split">
									<div
										className={`form-element ${
											errors.zip ? 'is-invalid' : ''
										}`}>
										<div className="label-and-error">
											<label htmlFor="zip">Zip</label>
											{errors?.zip?.type ===
												'required' && (
												<p className="error-message">
													This field is required
												</p>
											)}
										</div>
										<input
											{...register('zip', {
												required: true,
											})}
											type="text"
											aria-invalid={
												errors.zip ? 'true' : 'false'
											}
										/>
									</div>
									<div
										className={`form-element ${
											errors.city ? 'is-invalid' : ''
										}`}>
										<div className="label-and-error">
											<label htmlFor="city">City</label>
											{errors?.city?.type ===
												'required' && (
												<p className="error-message">
													This field is required
												</p>
											)}
										</div>
										<input
											{...register('city', {
												required: true,
											})}
											type="text"
											aria-invalid={
												errors.city ? 'true' : 'false'
											}
										/>
									</div>
									<div
										className={`form-element ${
											errors.phone ? 'is-invalid' : ''
										}`}>
										<div className="label-and-error">
											<label htmlFor="phone">
												Phone Number
											</label>
											{errors?.phone?.type ===
												'required' && (
												<p className="error-message">
													This field is required
												</p>
											)}
										</div>
										<input
											{...register('phone', {
												required: true,
											})}
											type="phone"
											aria-invalid={
												errors.phone ? 'true' : 'false'
											}
										/>
									</div>
								</div>
							</div>
							<div className="form-section form-section--payments">
								<div className="overline">Payments</div>
								<label className="form-element--radio form-element--radio--1">
									<input
										type="radio"
										name="radio"
										checked={status === 1}
										onChange={(e) => radioHandler(1)}
									/>
									<span>e-Money</span>
								</label>
								<label className="form-element--radio form-element--radio--2">
									<input
										type="radio"
										name="radio"
										checked={status === 2}
										onChange={(e) => radioHandler(2)}
									/>
									<span>Cash on Delivery</span>
								</label>
								{status === 1 && (
									<div className="e-money-option">
										<div className="split">
											<div
												className={`form-element ${
													errors.eNumber
														? 'is-invalid'
														: ''
												}`}>
												<div className="label-and-error">
													<label htmlFor="Number">
														e-Money eNumber
													</label>
													{errors?.eNumber?.type ===
														'required' && (
														<p className="error-message">
															This field is
															required
														</p>
													)}
												</div>
												<input
													{...register('eNumber', {
														required: true,
													})}
													type="text"
													aria-invalid={
														errors.eNumber
															? 'true'
															: 'false'
													}
												/>
											</div>
											<div
												className={`form-element ${
													errors.pin
														? 'is-invalid'
														: ''
												}`}>
												<div className="label-and-error">
													<label htmlFor="pin">
														e-Money PIN
													</label>
													{errors?.pin?.type ===
														'required' && (
														<p className="error-message">
															This field is
															required
														</p>
													)}
												</div>
												<input
													{...register('pin', {
														required: true,
													})}
													type="text"
													aria-invalid={
														errors.pin
															? 'true'
															: 'false'
													}
												/>
											</div>
										</div>
									</div>
								)}
								{status === 2 && (
									<div className="cash-on-delivery">
										<img src={codIcon} alt="" />
										<p>
											The 'Cash on Delivery' option
											enables you to pay in cash when our
											delivery courier arrives at your
											residence. Just make sure your
											address is correct so that your
											order will not be cancelled.
										</p>
									</div>
								)}
								{/* </div> */}
							</div>
						</div>
						<div className="summary">
							{productsCount > 0 ? (
								<>
									{cart.items.map((currentProduct, idx) => (
										<CheckOutProduct
											key={idx}
											id={currentProduct.id}
											quantity={currentProduct.quantity}
										/>
									))}
									<div className="checkout-line products-total">
										<p>Total</p>
										<div className="total">
											$ {cart.getTotalCost()}
										</div>
									</div>
									<div className="checkout-line product-shipping">
										<p>Shipping</p>
										<div className="total">
											$ {shipping}
										</div>
									</div>
									<div className="checkout-line vat">
										<p>VAT (included)</p>
										<div className="total">
											$
											{(
												cart.getTotalCost() *
												(taxRate / 100)
											).toFixed(0)}
										</div>
									</div>
									<div className="checkout-line">
										<p>Grand total</p>
										<div className="total grand-total">
											${cart.getTotalCost() + shipping}
										</div>
									</div>
									<input
										className="button"
										type="submit"
										value="Continue & pay"
										onClick={paymentClick}
									/>
								</>
							) : (
								<div>
									<p>
										There is nothing in your cart at this
										time.
									</p>
								</div>
							)}
						</div>
					</form>
				</div>
				<div
					className={`fade-out ${payment ? 'active' : ''}`}
					onClick={closePayment}></div>
				<div
					className={`order-conformation ${payment ? 'active' : ''}`}>
					<svg
						width="64"
						height="64"
						xmlns="http://www.w3.org/2000/svg">
						<g fill="none" fillRule="evenodd">
							<circle fill="#D87D4A" cx="32" cy="32" r="32" />
							<path
								stroke="#FFF"
								strokeWidth="4"
								d="m20.754 33.333 6.751 6.751 15.804-15.803"
							/>
						</g>
					</svg>
					<div className="h2">
						THANK YOU
						<br />
						FOR YOUR ORDER
					</div>
					<p>You will receive an email confirmation shortly.</p>
					<div className="summary">
						<div>
							{cart.items.map((currentProduct, idx) => (
								<CheckOutProduct
									key={idx}
									id={currentProduct.id}
									quantity={currentProduct.quantity}
								/>
							))}
							{productsCount > 1 ? (
								<div className="products-count">
									and {productsCount - 1} other items
								</div>
							) : (
								<></>
							)}
						</div>
						<div className="checkout-line">
							<p>Grand total</p>
							<div className="total grand-total">
								${cart.getTotalCost() + shipping}
							</div>
						</div>
					</div>
					<Link className="button" to="/">
						Back to Home
					</Link>
				</div>
			</div>
		</main>
	);
};

export default Cart;

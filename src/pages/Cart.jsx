import { useEffect } from 'react';
import { CartContext } from '../CardContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import GoBack from '../components/GoBack';
import CheckOutProduct from '../components/CheckOutProduct/CheckOutProduct';
import codIcon from '/assets/checkout/icon-cash-on-delivery.svg';

import '../SASS/Pages/cart.scss';

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
	// console.log(watch('firstName'));

	const [status, setStatus] = useState(0);

	const radioHandler = (status) => {
		setStatus(status);
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
											{errors?.name?.type ===
												'pattern' && (
												<p className="error-message">
													Alphabetical characters only
												</p>
											)}
										</div>
										<input
											{...register('name', {
												required: true,
												pattern: /^[A-Za-z]+$/i,
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
											{errors?.phone?.type ===
												'pattern' && (
												<p className="error-message">
													Wrong format
												</p>
											)}
										</div>
										<input
											{...register('phone', {
												required: true,
												pattern:
													/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
											{errors?.phone?.type ===
												'pattern' && (
												<p className="error-message">
													Wrong format
												</p>
											)}
										</div>
										<input
											{...register('phone', {
												required: true,
												pattern:
													/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
								{/* <div className="options"> */}
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
									)}
									{status === 2 && (
										<div className="cash-on-delivery">
											<img src={codIcon} alt="" />
											<p>
												The 'Cash on Delivery' option
												enables you to pay in cash when
												our delivery courier arrives at
												your residence. Just make sure
												your address is correct so that
												your order will not be
												cancelled.
											</p>
										</div>
									)}
								{/* </div> */}
							</div>
						</div>
						<div className="summary">
							<input type="submit" />
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

									<h1>
										Total: {cart.getTotalCost().toFixed(2)}
									</h1>
									<button>Purchase Items!</button>
									<button
										onClick={() => cart.deleteFromCart(id)}>
										Remove
									</button>
								</>
							) : (
								<div>
									<p>Empty</p>
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Cart;

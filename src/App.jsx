import { HashRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import CartProvider from './CardContext';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/CheckOut';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<CartProvider>
			<HashRouter>
				<ScrollToTop />
				<Nav />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/headphones" element={<Headphones />} />
					<Route path="/speakers" element={<Speakers />} />
					<Route path="/earphones" element={<Earphones />} />
					<Route
						path="/products/:productId"
						element={<ProductDetail />}
					/>
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
				<Footer />
			</HashRouter>
		</CartProvider>
	);
}

export default App;

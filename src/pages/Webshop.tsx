import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

import { API_URL } from "@libs/api";
import { ProductsApi } from "@libs/api/products";
import { Product } from "@libs/types";
import ProductDetails from './ProductDetails';

import "@assets/css/Webshop.css";
import "@assets/css/WebshopDark.css";

export default function Webshop() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const [err, data] = await ProductsApi.getAll();
			if (err) {
				setError("Nem sikerült betölteni a termékeket.");
			} else {
				setProducts(data!);
			}
			setLoading(false);
		})();
	}, []);

	return (
		<div>
			<Container fluid='lg' className='mt-4 card-grid'>
			{loading && (
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			)}
			{error && <Alert variant='danger'>{error}</Alert>}

			<Row className='gx-4 gy-4 gap-4'>
				{products.map((product) => (
					<Col className='cardContainer' key={product.id}>
						<Card className='productCard'>
							<img className='productCardImage' src={`${API_URL}products/${product.id}/image`} alt={product.name} />
							<h1 className='productCardTitle'>{product.name}</h1>
							<div>
								<p className='productCardText'>{product.price} Ft</p>
								<Button className='productCardButton'onClick={() => setSelectedProduct(product)}>
									<img className='icon' src="/img/icons/cartIcon.png" alt='cart icon' />
								</Button>
							</div>
						</Card>
					</Col>
				))}
			</Row>
		</Container>

		<div className={`product-panel ${selectedProduct ? "open" : ""}`}>
				{selectedProduct && (
					<ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
				)}
		</div>

		</div>
		
	);
}

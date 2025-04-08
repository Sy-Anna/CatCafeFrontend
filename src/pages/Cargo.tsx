import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import '../css/Webshop.css';
import '../css/WebshopDark.css';
import CartIcon from '../img/icons/cartIcon.png';
import { API_URL } from '../libs/api';
import { ProductsApi } from '../libs/api/products';
import type { Product } from '../libs/types';

function Cargo() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [formLoading, setFormLoading] = useState(false);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');
	const [active, setActive] = useState(true);
	const [image, setImage] = useState<File | null>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			const [error, response] = await ProductsApi.getAll();
			if (error) {
				console.error('Nem sikerült lekérni a termékeket', error);
				alert('Nem jött le semmi');
			} else {
				console.log('Termékek:', response);
				setProducts(response!);
			}
			setLoading(false);
		};

		fetchProducts();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormLoading(true);

		if (!image) {
			alert('Kép feltöltése kötelező!');
			setFormLoading(false);
			return;
		}

		const [error] = await ProductsApi.create(name, description, parseFloat(price), quantity, image);

		if (error) {
			console.error('Hiba termék létrehozásakor:', error);
			alert('Valami elromlott');
		} else {
			alert('Termék sikeresen létrehozva');
			setName('');
			setDescription('');
			setPrice('');
			setQuantity('');
			setActive(true);
			setImage(null);

			// Újratöltés
			const [_, newProducts] = await ProductsApi.getAll();
			if (newProducts) setProducts(newProducts);
		}

		setFormLoading(false);
	};

	if (loading) {
		return (
			<Spinner
				animation='border'
				variant='primary'
			/>
		);
	}

	return (
		<Container
			fluid='lg'
			className='mt-4 card-grid'>
			<Row className='gx-4 gy-4 gap-4'>
				{products.map((product) => (
					<Col
						className='cardContainer'
						key={product.id}>
						<Card className='productCard'>
							<img
								className='productCardImage'
								src={`${API_URL}products/${product.id}/image`}
								alt='webshopImage'
							/>
							<h1 className='productCardTitle'>{product.name}</h1>
							<p className='productCardText'>{product.price} Ft</p>
							<Button className='productCardButton'>
								<img
									className='icon'
									src={CartIcon}
									alt='cart icon'
								/>
							</Button>
						</Card>
					</Col>
				))}
			</Row>

			<Form
				onSubmit={handleSubmit}
				className='mt-5'>
				<h1>Új termék hozzáadása</h1>

				<Form.Group className='mb-3'>
					<Form.Control
						type='text'
						placeholder='Termék név'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control
						type='text'
						placeholder='Leírás'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control
						type='number'
						placeholder='Ár'
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control
						type='text'
						placeholder='Mennyiség'
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Check
						type='checkbox'
						label='Aktív'
						checked={active}
						onChange={(e) => setActive(e.target.checked)}
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Control
						type='file'
						onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
					/>
				</Form.Group>

				<Button
					className='loginBtn'
					type='submit'
					disabled={formLoading}>
					{formLoading ? 'Mentés...' : 'Tovább'}
				</Button>
			</Form>
		</Container>
	);
}

export default Cargo;

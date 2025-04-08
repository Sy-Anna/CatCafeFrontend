import { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Button, Spinner, Alert } from 'react-bootstrap';
import CartIcon from '../img/icons/cartIcon.png';
import '../css/Webshop.css';
import '../css/WebshopDark.css';
import { ProductsApi } from '../libs/api/products';
import { Product } from '../libs/types';

function Webshop() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const [err, data] = await ProductsApi.getAll();
            if (err) {
                setError('Nem sikerült betölteni a termékeket.');
            } else {
                setProducts(data);
            }
            setLoading(false);
        };

        fetchProducts();
    }, []);

    return (
        <Container fluid="lg" className="mt-4 card-grid">
            {loading && <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Row className="gx-4 gy-4 gap-4">
                {products.map((product) => (
                    <Col className="cardContainer" key={product.id}>
                        <Card className="productCard">
                            <img className="productCardImage" src={product.image} alt={product.name} />
                            <h1 className="productCardTitle">{product.name}</h1>
                            <div>
                                <p className="productCardText">{product.price} Ft</p>
                                <Button className="productCardButton">
                                    <img className="icon" src={CartIcon} alt="cart icon" />
                                </Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Webshop;

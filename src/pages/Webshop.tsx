import Button from 'react-bootstrap/Button'
import Image from '../img/catCafeIndex.png';
import CartIcon from '../img/icons/cartIcon.png';
import '../css/Webshop.css';
import '../css/WebshopDark.css';
import { Col, Container, Row, Card } from 'react-bootstrap';


const products = [
    {
        id: 1,
        title: "Termék1",
        price: 3000
    },
    {
        id:2,
        title: "Termék2",
        price: 3000
    },
    {
        id:3,
        title: "Termék3",
        price: 3000
    },
    {
        id:4,
        title: "Termék4",
        price: 3000
    },
    {
        id:5,
        title: "Termék5",
        price: 3000
    },
]

function Webshop () {

    return (
        <>
        <Container fluid="lg" className="mt-4 card-grid">
            <Row className='gx-4 gy-4'> 
                {products.map((products) => (
                    <Col key={products.id} xs={16} sm={16} md={6} lg={4}>
                            <Card className="productCard">
                                <img className="productCardImage" src={Image} alt="webshopImage" />
                                <h1 className="productCardTitle">
                                {products.title}
                                 </h1>
                                <div>
                                <p className='productCardText'>
                                    {products.price}
                                </p>
                                <Button className="productCardButton">
                                    <img className="icon" src={CartIcon} alt="cart icon" />
                                </Button>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>
        
        </>
    );
};

export default Webshop;
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import "../css/Home.css"

const pages = [
    {
        id: 1,
        source: "/Gallery.tsx",
        imgSource: "/img/gallery/img2.jpg"
    }
]


const Home = () => {
    return <> 
        <Container fluid="lg" className="mt-4 card-grid">
            <Row className='gx-4 gy-4 gap-4'> 
                {pages.map((page) => (
                    <Col className="cardContainer" key={page.id}>
                        <Button className='productCard'>
                            <a href={page.source}>
                                <img className="productCardImage" src={page.imgSource} alt="image"/>
                            </a>
                        </Button>
                            <Card className="productCard">
                                <img  src={page.imgSource} alt="webshopImage" />
                                <h1 className="productCardTitle">
                                {page.source}
                                </h1>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>
    </>
};

export default Home;
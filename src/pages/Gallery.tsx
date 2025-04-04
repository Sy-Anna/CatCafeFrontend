import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import "../css/Gallery.css";


const images = [
    {
        id: 1,
        source: "/img/gallery/img1.jpg"
    },
    {
        id: 2,
        source: "/img/gallery/img2.jpg"
    },
    {
        id: 3,
        source: "/img/gallery/img3.jpg"
    },
    {
        id: 4,
        source: "/img/gallery/img4.jpg"
    },
    {
        id: 5,
        source: "/img/gallery/img5.jpg"
    },

]

function Gallery() {
    return (
        <>
        
        <Container fluid="lg" className="mt-4 card-grid">
            <Row className='gx-4 gy-4 gap-4'> 
                {images.map((image) => (
                    <Col className="cardContainer" key={image.id}>
                            <Card className="imageCard">
                                <img className="imageCardImage" src={image.source} alt="webshopImage" />
                                
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>

        </>
    );
};

export default Gallery;
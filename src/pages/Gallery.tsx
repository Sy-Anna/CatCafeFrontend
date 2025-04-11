import { Card, Col, Container, Row } from "react-bootstrap";

import "@assets/css/Gallery.css";
import "@assets/css/GalleryDark.css";

const images = Object.values(
    import.meta.glob("/src/assets/img/gallery/*.{jpg,jpeg,png,gif,webp}", {
        eager: true,
        import: "default",
    }),
);

const shuffledImages = [...images].sort(() => Math.random() - 0.5) as string[];

export default function Gallery() {
    return (
        <Container fluid="lg" className="mt-4 gallery-card-grid">
            <Row>
                <h1>A Cat Café négylábú csapattagjai:</h1>
            </Row>
            <Row>
                {shuffledImages.map((image, index) => (
                    <Col className="galleryCardContainer" key={index}>
                        <Card className="card imageCard">
                            <img
                                className="imageCardImage"
                                src={image}
                                alt="image"
                                loading="lazy"
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

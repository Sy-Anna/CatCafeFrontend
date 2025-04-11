import { Container } from "react-bootstrap";

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
        <>
            <h1>A Cat Café négylábú csapattagjai:</h1>
            <Container fluid="lg" className="mt-4 gallery-card-grid">
                {shuffledImages.map((image, index) => (
                    <div className="galleryCardContainer" key={index}>
                        <div className="card imageCard">
                            <img
                                className="imageCardImage"
                                src={image}
                                alt="image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </Container>
        </>
    );
}

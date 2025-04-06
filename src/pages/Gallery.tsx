import "../css/Gallery.css";
import "../css/GalleryDark.css";


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
        source: "/img/gallery/img8.jpeg"
    },
    {
        id: 5,
        source: "/img/gallery/img5.jpg"
    },
    {
        id: 6,
        source: "/img/gallery/img6.jpeg"
    },
    {
        id: 7,
        source: "/img/gallery/img7.jpeg"
    },
    {
        id: 8,
        source: "/img/gallery/img4.jpg"
    },
    {
        id: 9,
        source: "/img/gallery/img9.jpeg"
    },
    {
        id: 10,
        source: "/img/gallery/img10.jpeg"
    },
    {
        id: 11,
        source: "/img/gallery/img11.jpeg"
    },
    {
        id: 12,
        source: "/img/gallery/img12.jpeg"
    },
    {
        id: 13,
        source: "/img/gallery/img13.jpeg"
    },
    {
        id: 14,
        source: "/img/gallery/img14.jpeg"
    },
    {
        id: 15,
        source: "/img/gallery/img15.jpeg"
    },
]



function Gallery() {
    return (
        <>
        
        <div className="gallery-card-grid">
                {images.map((image) => (
                    <div className="galleryCardContainer" key={image.id}>
                        <div className="imageCard">
                            <img className="imageCardImage" src={image.source} alt="image" />
                        </div>
                    </div>
                ))}
        </div>

        </>
    );
};

export default Gallery;
import "../css/Gallery.css";
import "../css/GalleryDark.css";

const images = Object.values(
	import.meta.glob("/src/img/gallery/*.{jpg,jpeg,png,gif,webp}", {
		eager: true,
		import: "default",
	}),
);

const shuffledImages = [...images].sort(() => Math.random() - 0.5) as string[];

export default function Gallery() {
	return (
		<>
			<h1>A Cat Café négylábú csapattagjai:</h1>
			<div className='gallery-card-grid'>
				{shuffledImages.map((image, index) => (
					<div className='galleryCardContainer' key={index}>
						<div className='imageCard'>
							<img className='imageCardImage' src={image} alt='image' />
						</div>
					</div>
				))}
			</div>
		</>
	);
}

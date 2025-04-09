import { Product } from "@libs/types";
import { Button } from "react-bootstrap";
import { API_URL } from "@libs/api";

type Props = {
	product: Product;
	onClose: () => void;
};

export default function ProductDetails({ product, onClose }: Props) {
	return (
		<div className="productDetails">
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<Button variant="outline-dark" size="sm" onClick={onClose}>
					✖ Bezárás
				</Button>
			</div>

			<h2>{product.name}</h2>
			<img
				src={`${API_URL}products/${product.id}/image`}
				alt={product.name}
				style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
			/>
			<p>{product.price} Ft</p>
			<p>{product.description}</p>
		</div>
	);
}

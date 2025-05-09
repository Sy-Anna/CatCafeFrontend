import { Button } from "react-bootstrap";
import { API_URL } from "@libs/api";
import { Product } from "@libs/types";

import "@assets/css/ProductDetails.css";
import "@assets/css/ProductDetailsDark.css";

type Props = {
    product: Product;
    onClose: () => void;
    onAddToCart: () => void;
};

export default function ProductDetails({
    product,
    onClose,
    onAddToCart,
}: Props) {
    return (
        <div className="productDetails">
            <div className="detailsHeader">
                <Button variant="outline-dark" size="sm" onClick={onClose}>
                    x
                </Button>
            </div>

            <h2 className="productTitle">{product.name}</h2>

            <div className="imageContainer">
                <img
                    src={`${API_URL}products/${product.id}/image`}
                    alt={product.name}
                    className="productImage"
                />
            </div>

            <p>{product.price} Ft</p>
            <p>{product.description}</p>

            <Button size="sm" onClick={onAddToCart}>
                Kosárba rakom
            </Button>
        </div>
    );
}

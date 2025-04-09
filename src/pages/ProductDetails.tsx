import { useState } from "react";
import { Product } from "@libs/types";
import { Button, Form } from "react-bootstrap";
import { API_URL } from "@libs/api";
import { ProductsApi } from "@libs/api/products";

import "@assets/css/ProductDetails.css";
import "@assets/css/ProductDetailsDark.css";

type Props = {
	product: Product;
	onClose: () => void;
};

export default function ProductDetails({ product, onClose }: Props) {
	const [quantity, setQuantity] = useState<number>(1);

	const handleBuy = async () => {
		if (quantity < 1) {
			alert("A mennyiségnek legalább 1-nek kell lennie.");
			return;
		}
		const [error, response] = await ProductsApi.buy([{ id: product.id, quantity }]);
        if (error) {
          alert("Hiba történt a vásárlás során.");
          console.error(error);
        } else {
          alert("Sikeres vásárlás!");
          onClose();
        }
        };

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

            <div className="inputGroup">
                <Form.Control
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="quantityInput"
                />
                <Button variant="primary" size="sm" onClick={handleBuy} className="buyButton">
                  Vásárlás
                </Button>
            </div>

			
		</div>
	);
}

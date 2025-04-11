import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";

import { API_URL } from "@libs/api";
import { ProductsApi } from "@libs/api/products";
import { Product } from "@libs/types";

import ProductDetails from "@ui/ProductDetails";

import "@assets/css/Webshop.css";
import "@assets/css/WebshopDark.css";
import { useNotification } from "@hooks/useNotification";
import useStorageState from "use-storage-state";

export default function Webshop() {
    const notification = useNotification();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null,
    );
    const [cartContent, setCartContent] = useStorageState<
        Array<{ id: number; quantity: number }>
    >("cart", {
        defaultValue: [],
    });

    const handleAddToCart = (product: Product) => {
        const existingProduct = cartContent.find(
            (item) => item.id === product.id,
        );

        if (existingProduct) {
            setCartContent((prev) =>
                prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item,
                ),
            );
        } else {
            setCartContent((prev) => [
                ...prev,
                { id: product.id, quantity: 1 },
            ]);
        }

        notification.add(`${product.name} hozzáadva a kosárhoz!`, "success");
        setSelectedProduct(null);
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            const [err, data] = await ProductsApi.getAll();
            if (err || !data) {
                notification.add(
                    "Nem sikerült betölteni a termékeket.",
                    "error",
                );
            } else {
                setProducts(data.filter((product) => product.quantity > 0));
            }
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            <Container fluid="lg" className="mt-4 card-grid">
                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}

                <Row className="gx-4 gy-4 gap-4">
                    {products.map((product) => (
                        <Col className="cardContainer" key={product.id}>
                            <Card className="card productCard">
                                <img
                                    className="productCardImage"
                                    src={`${API_URL}products/${product.id}/image`}
                                    alt={product.name}
                                />
                                <h1 className="productCardTitle">
                                    {product.name}
                                </h1>
                                <div>
                                    <p className="productCardText">
                                        {product.price} Ft
                                    </p>
                                    <Button
                                        className="productCardButton"
                                        onClick={() =>
                                            setSelectedProduct(product)
                                        }
                                    >
                                        <img
                                            className="icon"
                                            src="/img/icons/cartIcon.png"
                                            alt="cart icon"
                                        />
                                    </Button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <div className={`product-panel ${selectedProduct ? "open" : ""}`}>
                {selectedProduct && (
                    <ProductDetails
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        onAddToCart={() => handleAddToCart(selectedProduct)}
                    />
                )}
            </div>
        </div>
    );
}

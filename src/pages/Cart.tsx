import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useStorageState from "use-storage-state";

import { API_URL } from "@libs/api";
import { ProductsApi } from "@libs/api/products";
import type { Product } from "@libs/types";

import "@assets/css/Cart.css";
import "@assets/css/CartDark.css";
import { useNotification } from "@hooks/useNotification";

export default function Cart() {
    const notification = useNotification();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [cartContent, setCartContent] = useStorageState<
        Array<{ id: number; quantity: number }>
    >("cart", {
        defaultValue: [],
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCartContent = (
        product: Product,
        mode: "add" | "remove" | "delete",
    ) => {
        const existingProduct = cartContent.find(
            (item) => item.id === product.id,
        );

        if (mode === "add") {
            if (existingProduct) {
                if (
                    existingProduct.quantity >= product.quantity &&
                    product.quantity > 0
                ) {
                    notification.add(
                        "Elérted a maximális mennyiséget!",
                        "error",
                    );
                    return;
                }

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
        } else if (mode === "remove") {
            if (existingProduct && existingProduct.quantity > 1) {
                setCartContent((prev) =>
                    prev.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item,
                    ),
                );
            } else {
                setCartContent((prev) =>
                    prev.filter((item) => item.id !== product.id),
                );
            }
        } else if (mode === "delete") {
            setCartContent((prev) =>
                prev.filter((item) => item.id !== product.id),
            );
            notification.add("Termék eltávolítva", "success");
        }
    };

    const handleBuy = async () => {
        const [error] = await ProductsApi.buy(cartContent);
        if (error) {
            if (Array.isArray(error.message)) {
                for (const message of error.message) {
                    notification.add(message, "error");
                }
            } else {
                notification.add(error.message, "error");
            }
            console.error(error);
        } else {
            notification.add("Sikeres vásárlás!", "success");
            setCartContent([]);
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        (async () => {
            setLoading(true);
            const [err, data] = await ProductsApi.getAll();
            if (err) {
                notification.add(
                    "Nem sikerült betölteni a termékeket.",
                    "error",
                );
            } else {
                setProducts(data!);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <Container fluid="lg" className="mt-4 cart">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="cartContainer">
                    <Row className="cartHeader">
                        {cartContent.length > 0 ? (
                            <Col>
                                <h1>Kosár</h1>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Termékek megvásárlása
                                </button>
                            </Col>
                        ) : (
                            <p className="emptyCart">A kosár üres</p>
                        )}
                    </Row>
                    <Row className="cartContent">
                        {products
                            .filter((product) =>
                                cartContent.some(
                                    (item) => item.id === product.id,
                                ),
                            )
                            .map((product) => (
                                <Col className="col-item" key={product.id}>
                                    <Card key={product.id} className="cartItem">
                                        <img
                                            src={`${API_URL}products/${product.id}/image`}
                                            alt={product.name}
                                        />
                                        <h3>{product.name}</h3>
                                        <p>{product.price} Ft</p>
                                        <p>
                                            Mennyiség:{" "}
                                            {
                                                cartContent.find(
                                                    (item) =>
                                                        item.id === product.id,
                                                )?.quantity
                                            }
                                        </p>
                                        <div className="cartItemActions">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    handleCartContent(
                                                        product,
                                                        "add",
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    handleCartContent(
                                                        product,
                                                        "remove",
                                                    )
                                                }
                                            >
                                                -
                                            </button>
                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    handleCartContent(
                                                        product,
                                                        "delete",
                                                    )
                                                }
                                            >
                                                Törlés
                                            </button>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>
            )}

            {isModalOpen && (
                <div className="modal">
                    <Card className="modalContent">
                        <h2>Vásárlás megerősítése</h2>
                        <ul>
                            {cartContent.map((item) => {
                                const product = products.find(
                                    (p) => p.id === item.id,
                                );
                                return (
                                    <li key={item.id}>
                                        {product?.name} - {item.quantity} db
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="modalActions">
                            <button
                                className="btn btn-primary"
                                onClick={handleBuy}
                            >
                                Megerősítés
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Mégse
                            </button>
                        </div>
                    </Card>
                </div>
            )}
        </Container>
    );
}

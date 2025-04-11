import { useEffect, useState } from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    Row,
    Spinner,
} from "react-bootstrap";
import useStorageState from "use-storage-state";

import { API_URL } from "@libs/api";
import { ProductsApi } from "@libs/api/products";
import type { Product, User } from "@libs/types";

import "@assets/css/Cargo.css";
import "@assets/css/Webshop.css";
import "@assets/css/WebshopDark.css";
import { useNotification } from "@hooks/useNotification";

export default function Cargo() {
    const notification = useNotification();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [formLoading, setFormLoading] = useState(false);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [user] = useStorageState<User | null>("user");

    useEffect(() => {
        if (!user || user.role !== "WORKER") {
            location.replace("/Home");
            return;
        }

        (async () => {
            const [error, response] = await ProductsApi.getAll();
            if (error) {
                console.error("Nem sikerült lekérni a termékeket", error);
                notification.add("Nem jött le semmi", "error");
            } else {
                console.log("Termékek:", response);
                setProducts(response!);
            }
            setLoading(false);
        })();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormLoading(true);

        if (!image) {
            notification.add("Kép feltöltése kötelező!", "error");
            setFormLoading(false);
            return;
        }

        const [error] = await ProductsApi.create(
            name,
            description,
            parseFloat(price),
            quantity,
            image,
        );

        if (error) {
            if (Array.isArray(error.message)) {
                for (const message of error.message) {
                    notification.add(message, "error");
                }
            } else {
                notification.add(error.message, "error");
            }
            console.error("Hiba termék létrehozásakor:", error);
        } else {
            notification.add("Termék sikeresen létrehozva", "success");
            setName("");
            setDescription("");
            setPrice("");
            setQuantity("");
            setImage(null);

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const [_, newProducts] = await ProductsApi.getAll();
            if (newProducts) setProducts(newProducts);
        }

        setFormLoading(false);
    };

    if (loading) {
        return <Spinner animation="border" variant="primary" />;
    }

    return (
        <Container fluid="lg" className="mt-4 card-grid">
            <Row className="gx-4 gy-4 gap-4">
                {products.map((product) => (
                    <Col className="cardContainer" key={product.id}>
                        <Card className="productCard">
                            <img
                                className="productCardImage"
                                src={`${API_URL}products/${product.id}/image`}
                                alt={product.name}
                            />
                            <h1 className="productCardTitle">{product.name}</h1>
                            <p className="productCardText">
                                {product.price} Ft
                            </p>
                            <p className="productCardText">
                                {product.quantity} db
                            </p>

                            <Button
                                onClick={async () => {
                                    if (
                                        window.confirm(
                                            `Biztosan törölni szeretnéd: ${product.name}?`,
                                        )
                                    ) {
                                        const [error] =
                                            await ProductsApi.delete(
                                                product.id,
                                            );
                                        if (error) {
                                            notification.add(
                                                "Hiba történt a törlés során.",
                                                "error",
                                            );
                                            console.error(error);
                                        } else {
                                            notification.add(
                                                "Termék törölve.",
                                                "success",
                                            );

                                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                            const [_, updatedProducts] =
                                                await ProductsApi.getAll();
                                            if (updatedProducts)
                                                setProducts(updatedProducts);
                                        }
                                    }
                                }}
                            >
                                <img
                                    className="icon"
                                    src="/img/icons/delete.png"
                                    alt="delete"
                                />
                            </Button>
                        </Card>
                    </Col>
                ))}
                <Card className="cargoCard pt-0">
                    <Form onSubmit={handleSubmit} className="mt-5">
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Termék név"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Leírás"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="number"
                                placeholder="Ár"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Mennyiség"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control
                                type="file"
                                onChange={(e) => {
                                    const file =
                                        (e.target as HTMLInputElement)
                                            .files?.[0] ?? null;
                                    setImage(file);
                                }}
                            />
                        </Form.Group>

                        <Button
                            className="mt-0"
                            type="submit"
                            disabled={formLoading}
                        >
                            {formLoading ? "+" : "+"}
                        </Button>
                    </Form>
                </Card>
            </Row>
        </Container>
    );
}

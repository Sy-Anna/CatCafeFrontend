import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useNotification } from "@hooks/useNotification";
import { UsersApi } from "@libs/api/users";

export default function RegForm() {
    const notification = useNotification();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            notification.add("A jelszavak nem egyeznek!", "error");
            return;
        }

        setLoading(true);

        const [error, response] = await UsersApi.register(
            name,
            email,
            password,
        );
        if (error) {
            if (Array.isArray(error.message)) {
                for (const message of error.message) {
                    notification.add(message, "error");
                }
            } else {
                notification.add(error.message, "error");
            }
        } else {
            console.log("Regisztráció sikeres:", response);
            navigate("/Profile");
        }

        setLoading(false);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Regisztráció</h1>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="text"
                    placeholder="felhasználónév"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="jelszó"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="password"
                    placeholder="jelszó újra"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Form.Group>

            <Button type="submit" disabled={loading}>
                Tovább
            </Button>
            <a href="/Registry"></a>
        </Form>
    );
}

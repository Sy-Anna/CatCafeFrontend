import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { UsersApi } from "@libs/api/users";

export default function RegForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("A jelszavak nem egyeznek!");
            return;
        }

        setLoading(true);
        setError(null);

        const [error, response] = await UsersApi.register(
            name,
            email,
            password,
        );
        if (error) {
            if (Array.isArray(error!.message)) {
                setError(
                    error!.message.join("\n") || "Ismeretlen hiba történt.",
                );
            } else {
                setError(error!.message || "Ismeretlen hiba történt.");
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

            <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
            >
                <Form.Control
                    type="text"
                    placeholder="felhasználónév"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
            >
                <Form.Control
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
            >
                <Form.Control
                    type="password"
                    placeholder="jelszó"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
            >
                <Form.Control
                    type="password"
                    placeholder="jelszó újra"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </Form.Group>

            <Button
                className="loginBtn"
                type="submit"
                disabled={loading}
            >
                Tovább
            </Button>
            <a href="/Registry"></a>
        </Form>
    );
}

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import useStorageState from "use-storage-state";

import { setAuthorizationHeader } from "@libs/api";
import { UsersApi } from "@libs/api/users";
import { User } from "@libs/types";

type LoginFormProps = {
    onLoginSuccess: (user: User) => void;
};

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_token, setToken] = useStorageState("token", { defaultValue: "" });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        const [error, response] = await UsersApi.login(email, password);

        if (error) {
            console.error("Login error", error);
            alert("Hibás email vagy jelszó!");
        } else {
            setToken(response!.token);
            setAuthorizationHeader();
            console.log("Login Successful:", response);
            navigate("/home");
        }

        const [userError, user] = await UsersApi.me();

        if (userError) {
            console.error("Nem sikerült lekérni a felhasználót", userError);
            alert("Sikertelen bejelentkezés");
        } else {
            console.log("Sikeres bejelentkezés", user);
            if (user.role == "WORKER") {
                navigate("/Cargo");
            } else {
                navigate("/Home");
            }
            onLoginSuccess(user);
        }

        setLoading(false);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>Bejelentkezés</h1>
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

            <Button
                className="loginBtn"
                variant="primary"
                type="submit"
                disabled={loading}
            >
                Tovább
            </Button>
            <br />
        </Form>
    );
}

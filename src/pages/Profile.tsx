import { useEffect, useState } from "react";
import { Card, Container, Spinner } from "react-bootstrap";

import { UsersApi } from "@libs/api/users";
import { User } from "@libs/types";
import LoginForm from "@pages/Login";
import MyPage from "@pages/MyPage";
import RegForm from "@pages/Registration";

import "@assets/css/Profile.css";

export default function Profile() {
    const [loginOrReg, setLoginOrReg] = useState<"login" | "reg">("login");
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const toggleForm = () => {
        setLoginOrReg(loginOrReg === "login" ? "reg" : "login");
    };

    useEffect(() => {
        (async () => {
            const [err, userData] = await UsersApi.me();
            if (!err && userData) {
                setUser(userData);
            }
            setLoading(false);
        })();
    }, []);

    if (loading)
        return (
            <Spinner
                animation="border"
                role="status"
            />
        );

    return (
        <Container>
            <Card className="profileCard">
                {user ? (
                    <MyPage
                        user={user}
                        onLogout={() => setUser(null)}
                    />
                ) : (
                    <>
                        {loginOrReg === "login" ? (
                            <LoginForm onLoginSuccess={(u) => setUser(u)} />
                        ) : (
                            <RegForm />
                        )}
                        <button
                            className="loginBtn"
                            onClick={toggleForm}
                        >
                            {loginOrReg === "login"
                                ? "Még nincs profilom"
                                : "Már van profilom"}
                        </button>
                    </>
                )}
            </Card>
        </Container>
    );
}

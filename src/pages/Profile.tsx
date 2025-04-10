import { useState } from "react";
import { Card, Container } from "react-bootstrap";
import useStorageState from "use-storage-state";

import { User } from "@libs/types";
import LoginForm from "@ui/Login";
import MyPage from "@ui/MyPage";
import RegForm from "@ui/Registration";

import "@assets/css/Profile.css";

export default function Profile() {
    const [loginOrReg, setLoginOrReg] = useState<"login" | "reg">("login");
    const [user, setUser] = useStorageState<User | null>("user");

    const toggleForm = () => {
        setLoginOrReg(loginOrReg === "login" ? "reg" : "login");
    };

    return (
        <Container>
            <Card className="profileCard">
                {user ? (
                    <MyPage user={user} onLogout={() => setUser(null)} />
                ) : (
                    <>
                        {loginOrReg === "login" ? (
                            <LoginForm onLoginSuccess={(u) => setUser(u)} />
                        ) : (
                            <RegForm />
                        )}
                        <button className="loginBtn" onClick={toggleForm}>
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

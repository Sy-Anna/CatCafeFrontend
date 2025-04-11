import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useStorageState from "use-storage-state";

import { ReservationsApi } from "@libs/api/reservations";
import { Reservation, User } from "@libs/types";
import LoginForm from "@ui/Login";
import MyPage from "@ui/MyPage";
import RegForm from "@ui/Registration";

import "@assets/css/Profile.css";
import "@assets/css/ProfileDark.css";

export default function Profile() {
    const [loginOrReg, setLoginOrReg] = useState<"login" | "reg">("login");
    const [user, setUser] = useStorageState<User | null>("user");
    const [reservation, setReservation] = useState<Reservation | null>(null);
    const [previousReservations, setPreviousReservations] = useState<
        Reservation[]
    >([]);

    const toggleForm = () => {
        setLoginOrReg(loginOrReg === "login" ? "reg" : "login");
    };

    useEffect(() => {
        if (user) {
            (async () => {
                const [error, reservations] = await ReservationsApi.getAll();
                if (error || !reservations) {
                    console.error(error);
                } else {
                    const activeReservation = reservations.find(
                        (r) => r.active,
                    );
                    setReservation(activeReservation || null);
                    setPreviousReservations(
                        reservations.filter((r) => !r.active),
                    );
                }
            })();
        }
    }, [user]);

    return (
        <Container fluid="lg" className="mt-4">
            <Row>
                {user ? (
                    <>
                        <Col>
                            <Card className="profileCard">
                                <MyPage
                                    user={user}
                                    onLogout={() => setUser(null)}
                                />
                            </Card>
                        </Col>
                        {user.role === "USER" && (
                            <Col>
                                <Card className="profileCard">
                                    {reservation && (
                                        <div className="reservation-info">
                                            <h2>Aktív asztalfoglalás:</h2>
                                            <p>Foglalás ID: {reservation.id}</p>
                                            <p>
                                                Időpont:{" "}
                                                {new Date(
                                                    reservation.date,
                                                ).toLocaleDateString("hu-HU")}
                                            </p>
                                        </div>
                                    )}
                                    {previousReservations.length > 0 && (
                                        <div className="reservation-info">
                                            <h3>Előző asztalfoglalások:</h3>
                                            <ul>
                                                {previousReservations.map(
                                                    (res, index) => (
                                                        <li key={index}>
                                                            Foglalás ID:{" "}
                                                            {res.id}
                                                            <br />
                                                            Időpont:{" "}
                                                            {new Date(
                                                                res.date,
                                                            ).toLocaleDateString(
                                                                "hu-HU",
                                                            )}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </Card>
                            </Col>
                        )}
                    </>
                ) : (
                    <Col>
                        <Card className="profileCard">
                            {loginOrReg === "login" ? (
                                <LoginForm onLoginSuccess={(u) => setUser(u)} />
                            ) : (
                                <RegForm />
                            )}
                            <button
                                className="btn btn-primary"
                                onClick={toggleForm}
                            >
                                {loginOrReg === "login"
                                    ? "Még nincs profilom"
                                    : "Már van profilom"}
                            </button>
                        </Card>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

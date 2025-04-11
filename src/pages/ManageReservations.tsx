import { useEffect, useState } from "react";
import { Button, Container, Form, Spinner } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import useStorageState from "use-storage-state";

import { useNotification } from "@hooks/useNotification";
import { ReservationsApi } from "@libs/api/reservations";
import { Reservation, User } from "@libs/types";

import "@assets/css/Cargo.css";

export default function ManageReservations() {
    const notification = useNotification();
    const [selectedReservation, setSelectedReservation] =
        useState<Reservation | null>(null);
    const [loading, setLoading] = useState(false);
    const [user] = useStorageState<User | null>("user");

    useEffect(() => {
        if (!user || user.role !== "WORKER") {
            location.replace("/Home");
        }
    }, [user]);

    const handleUpdateReservation = async () => {
        if (!selectedReservation) return;

        setLoading(true);
        const [error] = await ReservationsApi.update(
            selectedReservation.id,
            selectedReservation,
        );
        if (error) {
            notification.add("Nem sikerült frissíteni a foglalást.", "error");
        } else {
            notification.add("Foglalás frissítve.", "success");
        }
        setLoading(false);
    };

    return (
        <Container fluid="lg" className="mt-4">
            {loading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <Form className="mb-4">
                    <Form.Group className="mb-3">
                        <Form.Label>Foglalás ID</Form.Label>
                        <Form.Control
                            type="number"
                            value={selectedReservation?.id || ""}
                            onChange={(e) =>
                                setSelectedReservation({
                                    ...selectedReservation!,
                                    id: Number(e.target.value),
                                })
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Dátum</Form.Label>
                        <Calendar
                            value={
                                selectedReservation
                                    ? new Date(selectedReservation.date)
                                    : new Date()
                            }
                            onChange={(date) =>
                                setSelectedReservation({
                                    ...selectedReservation!,
                                    date: date as Date,
                                })
                            }
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Aktív</Form.Label>
                        <Form.Check
                            type="checkbox"
                            checked={selectedReservation?.active || false}
                            onChange={(e) =>
                                setSelectedReservation({
                                    ...selectedReservation!,
                                    active: e.target.checked,
                                })
                            }
                        />
                    </Form.Group>
                    <Button
                        onClick={handleUpdateReservation}
                        disabled={!selectedReservation}
                    >
                        Frissítés
                    </Button>
                </Form>
            )}
        </Container>
    );
}

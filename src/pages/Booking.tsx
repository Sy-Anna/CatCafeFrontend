import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "@assets/css/Calendar.css";
import "@assets/css/CalendarDark.css";
import { useNotification } from "@hooks/useNotification";
import { ReservationsApi } from "@libs/api/reservations";
import { Col, Container, Row } from "react-bootstrap";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Booking() {
    const [value, onChange] = useState<Value>(new Date());
    const notification = useNotification();

    const handleBooking = async () => {
        if (!value || Array.isArray(value)) {
            notification.add("Érvénytelen dátum!", "error");
            return;
        }

        const [error] = await ReservationsApi.create(value);
        if (error) {
            if (Array.isArray(error.message)) {
                for (const message of error.message) {
                    notification.add(message, "error");
                }
            } else {
                notification.add(error.message, "error");
            }
        } else {
            notification.add("Foglalás sikeresen létrehozva!", "success");
        }
    };

    return (
        <Container fluid="lg" className="mt-4 container">
            <Row>
                <Calendar onChange={onChange} value={value} />
            </Row>
            <Row>
                <Col>
                    <h3 className="mt-3">
                        Kiválasztott időpont:{" "}
                        {value ? value.toLocaleString() : "Nincs kiválasztva"}
                    </h3>
                    <button
                        className="btn btn-primary mt-3"
                        onClick={handleBooking}
                    >
                        Foglalás
                    </button>
                </Col>
            </Row>
        </Container>
    );
}

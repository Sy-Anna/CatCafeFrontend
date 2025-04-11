import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "@assets/css/Calendar.css";
import "@assets/css/CalendarDark.css";
import { useNotification } from "@hooks/useNotification";
import { ReservationsApi } from "@libs/api/reservations";

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
        <div className="container">
            <Calendar onChange={onChange} value={value} />
            <button className="btn btn-primary mt-3" onClick={handleBooking}>
                Foglalás
            </button>
        </div>
    );
}

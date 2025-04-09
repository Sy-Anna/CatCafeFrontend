import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "@assets/css/Calendar.css";
import "@assets/css/CalendarDark.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Booking() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="container">
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
}

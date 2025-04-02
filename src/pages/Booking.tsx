import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "../css/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function Booking () {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <div className='container'>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
  }

export default Booking;
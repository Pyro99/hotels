import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getCheckInDate, getCheckOutDate } from '../redux/timeSlice';
import { useDispatch } from 'react-redux';

function DateRangePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const dispatch = useDispatch();

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        const checkInDate = new Date(start) /1000;
        const checkOutDate = new Date(end) /1000;
        dispatch(getCheckInDate(checkInDate));
        dispatch(getCheckOutDate(checkOutDate));
    };
    return (
        <div>
            <DatePicker
                className='absolute'
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                inline
            />  
        </div>
    );
}

export default DateRangePicker;

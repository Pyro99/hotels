import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getEndTime, getStartTime } from '../redux/timeSlice';
import { useDispatch } from 'react-redux';

function DateRangePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const dispatch = useDispatch();

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        dispatch(getStartTime(start.getTime()));
        setEndDate(end);
        dispatch(getEndTime(end.getTime()));
        console.log('Start Date: ',start.getTime());
        console.log("end date", end.getTime());
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log("Days: ", diffDays);
    };

    return (
        <div>
            <DatePicker
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

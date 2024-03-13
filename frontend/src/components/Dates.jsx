import { useState } from 'react';
import DateRangePicker from './DateRangePicker';

const Dates = () => {
    const [date,setDate] = useState(false);
  return (
   <div className='m-3'>
        <button className=' bg-blue-500 rounded-lg text-center font-bold w-44 py-2 px-4' onClick={()=>setDate(!date)}>Select Dates</button>
        {date && <DateRangePicker />}
   </div>
  )
}

export default Dates
import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import moment  from 'moment'
import axios from "axios"
import "react-datepicker/dist/react-datepicker.css";
const Calendario = () => {
  const [startDate, setStartDate] = useState(new Date());
  let formattedDate = useState(null);
  const setDate = (date,value) => {
    setStartDate(date)
    const format = moment(date).format("YYYY-MM-DD");   
    formattedDate = format
    console.log(formattedDate)

  }

  
  return (
    <DatePicker
      dateFormat="yyyy/MM/dd"
      selected={startDate}
      onChange={setDate}
    />
  );
};



export default Calendario



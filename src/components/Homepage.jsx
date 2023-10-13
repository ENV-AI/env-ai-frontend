import Header from "../components/Header";
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Homepage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  return (
    <div className="container">
      <Header />
      <div className="flex justify-between items-start">
        {/* Left Section */}
        <div className="mr-4 w-1/4">
        
      
        </div>
        {/* Right Section */}
        <div className="right-section">
      <div className="mr-20 flex">
      <p className="text-white mr-3">Show Weather On:</p>
      <select data-te-select-init>
  <option value="1">Monthly Forecast</option>
  <option value="2">Bi-Weekly Forecast</option>
  <option value="3">Weekly Forecast</option>
  <option value="4">Hourly Forecast</option>

</select>
</div>
<div className="flex mr-3 mt-3">
  <p className="text-white">Select Time Extent:</p>
<div className="flex ml-2">
<p className="text-white mr-2">From:</p>
<DatePicker className="w-24 pl-1" selected={startDate} onChange={(date) => setStartDate(date)} />
<p className="text-white mr-2 ml-3">To:</p>
<DatePicker className="w-24 pl-1" selected={finishDate} onChange={(date) => setFinishDate(date)} />
</div>



</div>
<div className="mr-20 flex mt-2">
      <p className="text-white mr-3">Show Weather Based On Parameter:</p>
      <select data-te-select-init>
  <option value="1">Temperature</option>
  <option value="2">Humidity</option>
  <option value="3">Wind</option>
  <option value="4">Precipitation</option>

</select>
</div>

       
    

     
        </div>
      </div>
    </div>
  );
};

export default Homepage;

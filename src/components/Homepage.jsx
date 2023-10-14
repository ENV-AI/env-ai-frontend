import Header from "../components/Header";
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DataTable from "react-data-table-component";



const Homepage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const columns = [
    {
      name : "Day",
      selector: row => row.day,
      sortable:true
    },
      {
      name : "Temperature",
       selector: row => row.temp,
          sortable:true
    
    },
      {
      name : "Weather",
         selector: row => row.weather,
            sortable:true
    },
      {
      name : "Feels Like",
         selector: row => row.feels,
            sortable:true
    },
      {
      name : "Wind",
         selector: row => row.wind,
            sortable:true
    },
      {
      name : "Humidity",
         selector: row => row.humidity,
            sortable:true
    },
      {
      name : "Chance",
         selector: row => row.chance,
          sortable:true
    },

  ];
  const data = [
    {
      id:1,
      day:"Fri \n 13 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"32°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"11%"

    },
      {
      id:2,
      day:"Sat \n 14 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"34°C",
      wind:"10km/h",
      humidity:"23%",
      chance:"21%"

    },
      {
      id:3,
      day:"Sun \n 15 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"36°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"21%"

    },
      {
      id:4,
      day:"Mon \n 16 Oct",
      temp:"32/25°C",
      weather:"Sunny",
      feels:"32°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"21%"

    },
        {
      id:1,
      day:"Fri \n 13 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"32°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"21%"

    },
      {
      id:2,
      day:"Sat \n 14 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"34°C",
      wind:"10km/h",
      humidity:"29%",
      chance:"12%"

    },
      {
      id:3,
      day:"Sun \n 15 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"36°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"19%"

    },
      {
      id:4,
      day:"Mon \n 16 Oct",
      temp:"32/25°C",
      weather:"Sunny",
      feels:"32°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"22%"

    },
        {
      id:1,
      day:"Fri \n 13 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"32°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"21%"

    },
      {
      id:2,
      day:"Sat \n 14 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"34°C",
      wind:"10km/h",
      humidity:"29%",
      chance:"21%"

    },
      {
      id:3,
      day:"Sun \n 15 Oct",
      temp:"32/25°C",
      weather:"Mostly Sunny",
      feels:"36°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"21%"

    },
      {
      id:4,
      day:"Mon \n 16 Oct",
      temp:"32/25°C",
      weather:"Hot",
      feels:"32°C",
      wind:"10km/h",
      humidity:"39%",
      chance:"21%"

    }
  
  
  ]

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
      <div>
        <DataTable className="text-white mt-5"
        columns={columns}
        data={data}
        fixedHeader
        pagination
        ></DataTable>
      </div>
    </div>
  );
};

export default Homepage;

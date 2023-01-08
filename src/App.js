import React, { useState, useEffect } from "react";
import "./App.css";
import { dummyData } from "./component/dummyData";
import axios from "axios";
import Nasa from "./component/Nasa";

function App() {
  const [data, setData] = useState([dummyData]);
  const [date, setDate] = useState("2023-01-07");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + date)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [date]);

  function changeDate(day) {
    let formattedDate = new Date(date);
    formattedDate.setDate(formattedDate.getDate() + day);
    let oldFormatDate = `${formattedDate.getFullYear()}-${formattedDate.getMonth() +
      1}-${formattedDate.getDay()}`;
    setDate(oldFormatDate);
  }

  return (
    <div className="App">
      <Nasa data={data} changeDate={changeDate} />
    </div>
  );
}

export default App;

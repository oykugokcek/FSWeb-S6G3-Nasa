import React, { useState, useEffect } from "react";
import "./App.css";
import { dummyData } from "./component/dummyData";
import axios from "axios";

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
    // .catch((error) => {
    //   if (error.response) {
    //     console.log("response");
    //   } else if (error.request) {
    //     console.log("request");
    //   } else if (error.message) {
    //     console.log("other");
    //   }
    // });
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
      <h1>[data.title]</h1>
      <div className="date-content">
        <button onClick={() => changeDate(-1)} className="button">
          Azalt
        </button>
        <p className="date">{data.date}</p>
        <button onClick={() => changeDate(1)} className="button">
          Arttır
        </button>
      </div>
      <img src={data.url} alt="baslık" />
      <p className="explanation">{data.explanation}</p>
      <p className="copyright">{data.copyright}</p>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
function Nasa(props) {
  const { data, changeDate } = props;
  return (
    <>
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
    </>
  );
}

export default Nasa;

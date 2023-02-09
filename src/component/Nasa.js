import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Nasa(props) {
  const { data, changeDate } = props;

  const StyledNasaDiv = styled.div``;

  const StyledHeader = styled.h1`
    font-style: italic;
    padding: 20px;
  `;

  const StyledPhotoDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const StyledButton = styled.button`
    width: 82.61px;
    height: 37.65px;
    line-height: 37.65px; /*  added property  */
    box-sizing: border-box;
    background-color: white;
    font-weight: 700px;
    box-shadow: 0px 0.2em 0px 0px #ebebeb;
    display: block;
    text-align: center;
    background-position: center;
    border: none;
    margin: auto;
    font-family: "Bree Serif", serif;
  `;

  return (
    <StyledNasaDiv>
      <div className="date-content">
        <p className="date">{data.date}</p>
        <StyledPhotoDiv>
          <StyledButton onClick={() => changeDate(-1)} className="button">
            Previous
          </StyledButton>
          <img src={data.url} alt="baslık" />

          <StyledButton onClick={() => changeDate(1)} className="button">
            Next
          </StyledButton>
        </StyledPhotoDiv>
      </div>
      <StyledHeader>{data.title}</StyledHeader>

      <p className="explanation">{data.explanation}</p>
      <p className="copyright">{data.copyright}</p>
    </StyledNasaDiv>
  );
}

export default Nasa;

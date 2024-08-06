import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaArrowUp } from "react-icons/fa";

const ProfitContainer = styled.div`
  background-color: #27293d;
  margin-top: 30px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  height: 15%;
  width: 100%;
`;

const ProfitDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfitText = styled.p`
  margin: 0;
  font-size: 1.2em;
  color: #9e9e9e;
`;

const ProfitAmount = styled.h3`
  margin: 10px 0;
  font-size: 2em;
  color: #ffffff;
`;

const ProfitChange = styled.div`
  display: flex;
  align-items: center;
  color: #1cc88a;
  margin-top: 5px;

  svg {
    margin-right: 5px;
  }
`;

const CircularProgressContainer = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
`;

const Note = styled.p`
  margin: 0;
  font-size: 0.8em;
  color: #9e9e9e;
  text-align: right;
  margin-top: 10px;
`;

const NetProfit = () => {
  const profitPercentage = 70; // Example percentage
  const profitAmount = "$6759.25"; // Example amount
  const profitChange = 3; // Example change percentage

  return (
    <ProfitContainer>
      <ProfitDetails>
        <ProfitText>Net Profit</ProfitText>
        <ProfitAmount>{profitAmount}</ProfitAmount>
        <ProfitChange>
          <FaArrowUp />
          {profitChange}%
        </ProfitChange>
        <Note>*The values here have been rounded off.</Note>
      </ProfitDetails>
      <CircularProgressContainer>
        <CircularProgressbar
          value={profitPercentage}
          text={`${profitPercentage}%`}
          styles={buildStyles({
            textColor: "#ffffff",
            pathColor: "#4e73df",
            trailColor: "#383838",
          })}
        />
      </CircularProgressContainer>
    </ProfitContainer>
  );
};

export default NetProfit;

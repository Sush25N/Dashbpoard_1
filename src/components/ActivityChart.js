import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  background-color: #27293d;
  padding: 10px;
  border-radius: 10px;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledSelect = styled.select`
  padding: 8px 12px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background-color: #979797;
  color: white;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    color: #080808;
    background-color: #ffff9f;
  }
`;

const ActivityChart = () => {
  const labels = [
    "5",
    "9",
    "11",
    "13",
    "15",
    "17",
    "19",
    "21",
    "23",
    "25",
    "27",
    "29",
    "31",
    "33",
    "35",
    "37",
  ];

  const dataValues = [
    4000, 3000, 5000, 7000, 19000, 10000, 18000, 11000, 12000, 13000, 14000,
    15000, 17500, 11000, 19250, 22500,
  ];

  const backgroundColors = dataValues.map((value) =>
    value > 15000 ? "#ff6384" : "#4e73df"
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Activity",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: "#4e73df",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
  };

  return (
    <ChartContainer>
      <ChartHeader>
        <h2>Activity</h2>
        <StyledSelect>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </StyledSelect>
      </ChartHeader>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default ActivityChart;

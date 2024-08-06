import React from "react";
import styled from "styled-components";
import {
  FaShoppingBag,
  FaTruck,
  FaTimes,
  FaDollarSign,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

// Adjusting StatsContainer to remove justify-content to allow manual control over spacing
const StatsContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  background-color: #27293d;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-align: center;
  margin-right: 20px; // Added right margin to control spacing

  &:last-child {
    margin-right: 0; // Removes margin from the last card to prevent extra spacing at the end
  }

  svg {
    margin-bottom: 5px;
  }
`;

const StatText = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: #9e9e9e;
`;

const StatNumber = styled.h3`
  margin: 2px 0;
  font-size: 1.5em;
`;

const StatChange = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.change > 0 ? "#1cc88a" : "#e74a3b")};

  svg {
    margin-right: 5px;
  }
`;

const DashboardStats = () => {
  return (
    <div>
      <h1 style={{ color: "#fff", marginBottom: "20px" }}>Dashboard</h1>
      <StatsContainer>
        {/* StatCard components */}
        <StatCard>
          <FaShoppingBag size={30} color="#4e73df" />
          <StatNumber>75</StatNumber>
          <StatText>Total Orders</StatText>
          <StatChange change={3}>
            <FaArrowUp />
            3%
          </StatChange>
        </StatCard>
        <StatCard>
          <FaTruck size={30} color="#1cc88a" />
          <StatNumber>70</StatNumber>
          <StatText>Total Delivered</StatText>
          <StatChange change={-3}>
            <FaArrowDown />
            3%
          </StatChange>
        </StatCard>
        <StatCard>
          <FaTimes size={30} color="#e74a3b" />
          <StatNumber>5</StatNumber>
          <StatText>Total Cancelled</StatText>
          <StatChange change={3}>
            <FaArrowUp />
            3%
          </StatChange>
        </StatCard>
        <StatCard>
          <FaDollarSign size={30} color="#f6c23e" />
          <StatNumber>$12k</StatNumber>
          <StatText>Total Revenue</StatText>
          <StatChange change={3}>
            <FaArrowUp />
            3%
          </StatChange>
        </StatCard>
      </StatsContainer>
    </div>
  );
};

export default DashboardStats;

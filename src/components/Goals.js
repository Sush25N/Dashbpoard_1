import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronCircleRight, FaChevronCircleDown } from "react-icons/fa";

const Container = styled.div`
  background-color: #27293d;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  color: #9e9e9e;
`;

const Title = styled.h2`
  color: #ffffff;
  margin-bottom: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  color: #000000;
  svg {
    fill: #ffffff; // Ensure the icon color is white
  }
`;

const Goals = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Title>Goals</Title>
      <TextWrapper>
        {isExpanded ? text : `${text.substring(0, 15)}...`}
        <ToggleButton onClick={toggleText}>
          {isExpanded ? (
            <FaChevronCircleDown size={24} />
          ) : (
            <FaChevronCircleRight size={24} />
          )}
        </ToggleButton>
      </TextWrapper>
    </Container>
  );
};

export default Goals;

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

const Content = styled.p`
  margin-bottom: 20px;
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

const PopularDishes = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const content =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Title>Popular Dishes</Title>
      <TextWrapper>
        <Content>
          {isExpanded ? content : `${content.substring(0, 15)}...`}
        </Content>
        <ToggleButton onClick={toggleContent}>
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

export default PopularDishes;

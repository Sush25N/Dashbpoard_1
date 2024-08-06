import React from "react";
import styled from "styled-components";
import { FaBell, FaEnvelope, FaUserCircle } from "react-icons/fa";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css"; // Import the stylesheet

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1f1f3d;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #27293d;
  color: #fff;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar placeholder="Search..." />
      <IconContainer>
        <Tooltip
          placement="bottom"
          overlay={<span>Notifications</span>}
          arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
        >
          <FaBell color="#9e9e9e" />
        </Tooltip>
        <Tooltip
          placement="bottom"
          overlay={<span>Messages</span>}
          arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
        >
          <FaEnvelope color="#9e9e9e" />
        </Tooltip>
        <Tooltip
          placement="bottom"
          overlay={<span>Profile</span>}
          arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
        >
          <FaUserCircle color="#9e9e9e" />
        </Tooltip>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;

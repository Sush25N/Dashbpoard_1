import React from "react";
import styled from "styled-components";
import { FaHome, FaChartBar, FaClipboardList, FaCog } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css"; // Import the stylesheet

const SidebarContainer = styled.div`
  width: 100px;
  background-color: #27293d;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding: 20px 20px;
  height: calc(100vh - 25px);
`;

const SidebarIcon = styled.div`
  margin: 20px 0;
  color: #9e9e9e;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const ShutdownButton = styled(SidebarIcon)`
  margin-top: auto;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Tooltip
        placement="right"
        overlay={<span>Home</span>}
        arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
      >
        <SidebarIcon>
          <FaHome size={24} />
        </SidebarIcon>
      </Tooltip>
      <Tooltip
        placement="right"
        overlay={<span>Charts</span>}
        arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
      >
        <SidebarIcon>
          <FaChartBar size={24} />
        </SidebarIcon>
      </Tooltip>
      <Tooltip
        placement="right"
        overlay={<span>Clipboard</span>}
        arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
      >
        <SidebarIcon>
          <FaClipboardList size={24} />
        </SidebarIcon>
      </Tooltip>
      <Tooltip
        placement="right"
        overlay={<span>Settings</span>}
        arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
      >
        <SidebarIcon>
          <FaCog size={24} />
        </SidebarIcon>
      </Tooltip>
      <Tooltip
        placement="right"
        overlay={<span>Shutdown</span>}
        arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
      >
        <ShutdownButton>
          <RiShutDownLine size={24} />
        </ShutdownButton>
      </Tooltip>
    </SidebarContainer>
  );
};

export default Sidebar;

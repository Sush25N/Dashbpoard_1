import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardStats from "./components/DashboardStats";
import RecentOrders from "./components/RecentOrders";
import CustomerFeedback from "./components/CustomerFeedback";
import Goals from "./components/Goals";
import PopularDishes from "./components/PopularDishes";
import Menus from "./components/Menus";
import NetProfit from "./components/NetProfit";
import ActivityChart from "./components/ActivityChart";

const SidebarStyled = styled(Sidebar)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: #333;
  z-index: 100;
  overflow-x: hidden;
`;

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #1b1b1b;
  overflow-y: auto;
  height: calc(100vh - 60px);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr; // Adjusted for 3:2 ratio
  gap: 20px;
`;

const SubGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const App = () => {
  return (
    <AppContainer>
      <SidebarStyled />
      <MainContainer>
        <Header />
        <GridContainer>
          <div>
            <DashboardStats />
            <ActivityChart />
            <RecentOrders />
          </div>
          <div>
            <NetProfit />
            <Goals />
            <PopularDishes />
            <Menus />
            <CustomerFeedback />
          </div>
        </GridContainer>
      </MainContainer>
    </AppContainer>
  );
};

export default App;

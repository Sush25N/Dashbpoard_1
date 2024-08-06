import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #27293d;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
`;

const Title = styled.h2`
  color: #ffffff;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  color: #9e9e9e;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #383838;
  }

  th {
    text-align: left;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Row = styled.tr`
  color: #ffffff;

  &:nth-child(even) {
    background-color: #383838;
  }
`;

const StatusCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #383838;

  span {
    display: inline-block;
    padding: 5px;
    border-radius: 5px;
    color: white;
    font-weight: bold;

    &.delivered {
      background-color: #28a745; /* Green */
    }

    &.cancelled {
      background-color: #dc3545; /* Red */
    }

    &.pending {
      background-color: #ffc107; /* Yellow */
    }
  }
`;

const RecentOrders = () => {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48967586",
      amount: "$305.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78985215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20967532",
      amount: "$60.00",
      status: "Pending",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  return (
    <Container>
      <Title>Recent Orders</Title>
      <Table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <Row key={index}>
              <td>
                <Avatar
                  src={`https://i.pravatar.cc/150?img=${index}`}
                  alt="Avatar"
                />
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <StatusCell>
                <span
                  className={`${order.status.toLowerCase()} ${order.status}`}
                >
                  {order.status}
                </span>
              </StatusCell>
            </Row>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RecentOrders;

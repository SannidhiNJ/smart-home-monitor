// src/components/Dashboard.js
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PowerChart from './Chart/PowerChart'; // Import the chart component

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard - Power Consumption Data</h2>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Appliance 1</Card.Title>
              <Card.Text>Power Consumed: 250W</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Appliance 2</Card.Title>
              <Card.Text>Power Consumed: 500W</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
              <Card.Title>Appliance 3</Card.Title>
              <Card.Text>Power Consumed: 300W</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <PowerChart /> {/* Add the chart here */}
    </div>
  );
}

export default Dashboard;

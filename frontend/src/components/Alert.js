import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import Dashboard from './components/Dashboard';

function App() {
  const [powerConsumed, setPowerConsumed] = useState(0);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    // Simulate fetching power consumption and alerts (you can replace this with API calls)
    setPowerConsumed(800);  // Example power consumption in watts
    setAlert('High power consumption detected!'); // Example alert message
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Navbar with Power Consumption and Alerts */}
        <Navbar bg="dark" variant="dark" expand="lg">
          {/* Logo on the left */}
          <Navbar.Brand href="#">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="navbar-logo" 
            />
            Smart Home Energy Monitor
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">PowerConsumption</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>

            {/* Power Consumption and Alert in Navbar */}
            <Nav.Item className="ml-3">
              <Badge bg="info">Power Consumed: {powerConsumed}W</Badge>
            </Nav.Item>
            {alert && (
              <Nav.Item className="ml-3">
                <Badge bg="danger">{alert}</Badge>
              </Nav.Item>
            )}
          </Nav>
        </Navbar>
        
        {/* Main Content */}
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<div className="home-page"><h2>Welcome to the Smart Home Energy Monitor</h2><p>Monitor your home appliances' energy usage!</p></div>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<h2>Login Page</h2>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;

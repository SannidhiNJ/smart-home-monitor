import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import Dashboard from './components/Dashboard';
import Login from './components/Login'; // Import Login Component

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
        <img 
              src="/logo.png" 
              alt="Logo" 
              className="navbar-logo" 
            /> 
            
          <Navbar.Brand href="#">Smart Home Energy Monitor</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashboard">Power Consumption</Nav.Link>
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
            <Route path="/login" element={<Login />} /> {/* Add Login Route */}
          </Routes>
        </Container>

        {/* Footer */}
        <footer>
        
        </footer>
      </div>
    </Router>
  );
}

export default App;

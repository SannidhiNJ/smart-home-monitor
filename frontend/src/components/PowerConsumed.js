import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Container, Spinner } from 'react-bootstrap';

const PowerConsumed = () => {
  const [energyData, setEnergyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/energy')
      .then(response => {
        setEnergyData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching energy data:', error);
        setLoading(false);
      });
  }, []);

  const chartData = {
    labels: energyData.map((data) => data.name),
    datasets: [{
      label: 'Power Consumed (W)',
      data: energyData.map((data) => data.powerConsumed),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" />
        <p>Loading energy data...</p>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Power Consumed</h2>
      <Line data={chartData} />
    </Container>
  );
};

export default PowerConsumed;

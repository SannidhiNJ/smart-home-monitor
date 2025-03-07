// src/components/Chart/PowerChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PowerChart = () => {
  const data = {
    labels: ['Appliance 1', 'Appliance 2', 'Appliance 3'], // Labels of the appliances
    datasets: [
      {
        label: 'Power Consumption',
        data: [250, 500, 300], // Corresponding power consumption data
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h3>Power Consumption Trends</h3>
      <Line data={data} />
    </div>
  );
};

export default PowerChart;

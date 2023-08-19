import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function BarChartAMZN() {
  const [stockDataA, setStockDataA] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://financialmodelingprep.com/api/v3/income-statement/AMZN?limit=10&apikey=c82da036c18b7efd7bb7262e57a2b187");
        const data = await response.json(); 
        console.log(data);
        setStockDataA(data);
      } catch (error) {
        console.error("Error fetching data");
      }
    };
    fetchData();
  }, []);

  const years = stockDataA.map(item => item.calendarYear);
  const revenue = stockDataA.map(item => item.revenue);
  const profit = stockDataA.map(item => item.grossProfit);
  const netIncome = stockDataA.map(item => item.netIncome);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Revenue',
        data: revenue,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Profit',
        data: profit,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Net Income',
        data: netIncome,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} /> 
}

export default BarChartAMZN;

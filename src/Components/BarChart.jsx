/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const BarChart = ({symbol}) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=10&apikey=21cff28783fa1e446aa186c87fff60a3`);
        const data = await response.json();
        // console.log(data);
        setStockData(data); 
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const years = stockData.map(item => item.date.split('-')[0]);
  const revenue = stockData.map(item => item.revenue);
  const profit = stockData.map(item => item.grossProfit);
  const netIncome = stockData.map(item => item.netIncome);

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

  return <Bar data={data} options={options} />;
};



export default BarChart;

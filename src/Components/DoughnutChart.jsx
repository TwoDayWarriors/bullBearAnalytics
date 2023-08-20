/* eslint-disable react/prop-types */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({symbol}) {
  const [stockDataDA, setStockDataDA] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/balance-sheet-statement/${symbol}?apikey=c82da036c18b7efd7bb7262e57a2b187`);
        const data = await response.json();
        console.log(data);
        setStockDataDA(data);
      } catch (error) {
        console.log("Error Fetching data");
      }
    };

    fetchData();
  }, []);

  const years = stockDataDA.map(item => item.calendarYear);
  const retainedEarnings = stockDataDA.map(item => item.retainedEarnings);
  const totalDebt = stockDataDA.map(item => item.totalDebt);


  const labels = years;

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Retained Earnings',
        data: retainedEarnings,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Total Debt',
        data: totalDebt,
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
}

export default DoughnutChart;
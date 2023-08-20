/* eslint-disable react/prop-types */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({symbol}) {
  const [stockDataPA, setStockDataPA] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://financialmodelingprep.com/api/v3/enterprise-values/${symbol}?limit=10&apikey=6bd4262bf3bc14b781f7a692c03980ce`);
        const data = await response.json();
        console.log(data);
        setStockDataPA(data);
      } catch (error) {
        console.log("Error Fetching data");
      }
    };

    fetchData();
  }, []);

  const years = stockDataPA.map(item => item.date.split('-')[0]);
  const stockPrice = stockDataPA.map(item => item.stockPrice);


  const labels = years;

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Stock Price',
        data: stockPrice,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

  return <Pie data={data} />;
}

export default PieChart;

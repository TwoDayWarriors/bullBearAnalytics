import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartTSLA() {
  const [stockDataPT, setStockDataPT] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://financialmodelingprep.com/api/v3/enterprise-values/TSLA?limit=10&apikey=c82da036c18b7efd7bb7262e57a2b187");
        const data = await response.json();
        console.log(data);
        setStockDataPT(data);
      } catch (error) {
        console.log("Error Fetching data");
      }
    };

    fetchData();
  }, []);

  const years = stockDataPT.map(item => item.date.split('-')[0]);
  const stockPrice = stockDataPT.map(item => item.stockPrice);


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

export default PieChartTSLA;

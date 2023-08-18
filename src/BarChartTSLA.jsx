
import{ useEffect,useState } from 'react'
import { Bar } from 'react-chartjs-2';

function BarChartTSLA() {
 const [stockDataT,setStockDataT] = useState([])

useEffect(()=>{

     const fetchData = async ()=>{
    try{
        const res= await fetch("https://financialmodelingprep.com/api/v3/income-statement/TSLA?limit=10&apikey=578b0d3a91ea1580ec0b79802e29a079")
        const data = await res.json()
        console.log(data)
        setStockDataT(data)
     }
    catch(error){
        console.error("Error fetching data")
     }
};
fetchData();

},[])
    
const years = stockDataT.map(item => item.date.split('-')[0]);
const revenue = stockDataT.map(item => item.revenue);
const profit = stockDataT.map(item => item.grossProfit);
const netIncome = stockDataT.map(item => item.netIncome);

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


export default BarChartTSLA
import {useEffect, useState} from 'react'
import axios from 'axios'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stock Time Series',
      },
    },
  };



export const LineChart = () => {
    let [dataG, setData] = useState([])
    let info = ['1. open','2. high', '3. low', '4. close', '5. volume']

    useEffect(() => {
        const fetch = async () => {
            const data = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=F14G2FCXVLP5G3QQ`)).data
            setData(data)
        }
        fetch()
    },[])

    

    let dates = dataG['Time Series (Daily)']
    console.log(dates)

    const labels = info
    const data = {
      labels,
      datasets: [
        {
          label: '2023-08-17',
          data: [1,5,7,9,5,4,3],
          borderColor: 'rgb(216, 0, 115)',
          backgroundColor: 'rgba(216, 0, 115, 0.5)',
        },
        {
          label: '2023-08-16',
          data: [9,5,4,3,5,2,7],
          borderColor: 'rgb(100,118,135)',
          backgroundColor: 'rgba(100,118,135, 0.5)',
        },
      ],
    };




  return (
    <div>LineChart
        <Line options={options} data={data} />
    </div>
  )
}

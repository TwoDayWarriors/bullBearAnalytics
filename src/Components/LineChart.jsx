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
  
  const options = {
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
    let info = ['1. open','2. high', '3. low', '4. close']

    useEffect(() => {
        const fetch = async () => {
            const data = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo`)).data
            setData(data)
        }
        fetch()
    },[])

    

    let dates = dataG['Time Series (Daily)']
    let augDate = [] //stores the last 100 dates starting with the day before today

    for (let d in dates){
        let dateArray = d.split('-')
        if (dateArray[1] == '08'){
            augDate .push(d)

        }
    
    }

    console.log(augDate)





    const labels = info
    const data = {
      labels,
      datasets: [
        {
          label: '2023-08-17',
          data: [1,5,7,9,5,4,3],
          borderColor: 'rgb(100,118,135)',
          backgroundColor: 'rgba(100,118,135, 0.5)',
        },
      ],
    };




  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

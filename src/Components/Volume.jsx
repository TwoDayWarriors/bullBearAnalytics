/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import axios from 'axios'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const Volume = ({symbol}) => {

    
    let [dataG, setData] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const data = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=1FIZJL7M2DFILOEC`)).data
            setData(data)
        }
        fetch();
    },[symbol])

    

    let dates = dataG['Time Series (Daily)']
    let augDate = [] //stores the last 100 dates starting with the day before today

    for (let d in dates){
        let dateArray = d.split('-')
        if (dateArray[1] == '08'){
            augDate.push(d)

        }
    }

    // console.log(augDate[0])
    let values = []
    for (let d in dates){
        values.push(dates[d]["5. volume"])
    }
    console.log(values)

   


    const labels = augDate
    const data = {
      labels,
      datasets: [
        {
          label: "volume",
          data: values,
          backgroundColor: 'rgba(100,118,135, 0.5)',
        },
      ],
    };

    const options = {
        
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Volume',
        },
      },
    };
  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  )
}

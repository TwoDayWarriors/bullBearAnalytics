/* eslint-disable react/prop-types */
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
  
 
export const LineChart2 = ({symbol}) => {
    let [dataG, setData] = useState([])
    let[selectedInfo, setSelectedInfo] = useState("Select an option")
    let info = ['1. open','2. high', '3. low', '4. close']

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
        values.push(dates[d][selectedInfo])
    }



    const labels = augDate
    const data = {
      labels,
      datasets: [
        {
          label: selectedInfo,
          data: values,
          borderColor: 'rgb(100,118,135)',
          backgroundColor: 'rgba(100,118,135, 0.5)',
        },
      ],
    };

    const options = {
      y:{
        min:  120,
        max:  150,
        ticks: {stepSize: 1}
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        // title: {
        //   display: true,
        //   text: 'Stock Time Series',
        // },
      },
    };



  return (
    <div>
        <Line options={options} data={data} />


        <select value ={selectedInfo} onChange={(e) => setSelectedInfo(e.target.value)}> 
        
        <option value= 'Daily prices by date'>Select price</option>
        {info.map((i) => <option value = {i} key = {info.indexOf(i)}> {i} </option>)}

        </select>
    </div>
  )
}
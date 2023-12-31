/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import axios from 'axios'
import './Line.css'
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
            const data = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=67A4LGBFK68FLXF7`)).data
            setData(data)
        }
        fetch();
    },[])

    

    let dates = dataG['Time Series (Daily)']
    let augDate = [] //stores the last 100 dates starting with the day before today
    let values = []

    for (let d in dates){
        let dateArray = d.split('-')
        if (dateArray[1] == '08'){
            augDate.push(d)
        }

        values.push(dates[d][selectedInfo])
    }

    // console.log(augDate[0])
   
    // for (let d in dates){
    //     values.push(dates[d][selectedInfo])
    // }

    const labels = augDate
    const data = {
      labels,
      datasets: [
        {
          label: selectedInfo,
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      y:{
        min:  120,
        max:  300,
        ticks: {stepSize: 5}
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


        <select  className="btn btn-outline-info" id='Drop' value ={selectedInfo} onChange={(e) => setSelectedInfo(e.target.value)} > 
        
        <option value= 'Daily prices by date'>Select price</option>
        {info.map((i) => <option value = {i} key = {info.indexOf(i)}> {i} </option>)}

        </select>
    </div>
  )
}
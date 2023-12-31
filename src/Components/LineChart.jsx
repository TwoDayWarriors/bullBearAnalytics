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
  
 
export const LineChart = ({symbol}) => {
    let [dataG, setData] = useState([])
    let[selectedDate, setSelectedDate] = useState("Select a date")
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

    for (let d in dates){
        let dateArray = d.split('-')
        if (dateArray[1] == '08'){
            augDate.push(d)

        }
    }

    // console.log(augDate[0])
    let values = []

    if (selectedDate != "Select a date"){

    values = Object.values(dates[selectedDate])
    // console.log(values)
    }


    const labels = info
    const data = {
      labels,
      datasets: [
        {
          label: selectedDate,
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        },
      ],
    };

    const options = {
      y:{
        min: selectedDate != "Select a date" ? values[2] - 5 : 120,
        max: selectedDate != "Select a date" ? values[1] + 10: 150,
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

        <select className="btn btn-outline-info" id='Drop' value ={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}> 
        
        <option value= 'Select a date'>Select a date</option>
        {augDate.map((d) => <option value = {d} key = {augDate.indexOf(d)}> {d} </option>)}

        </select>

      
    </div>
  )
}

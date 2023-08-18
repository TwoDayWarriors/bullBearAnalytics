import {useEffect, useState} from 'react'
import axios from 'axios'

export const LineChart = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const data = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=F14G2FCXVLP5G3QQ`)).data
            setData(data)
        }
        fetch()
    },[])

    let dates = data['Time Series (Daily)']
    console.log(dates)


  return (
    <div>LineChart</div>
  )
}

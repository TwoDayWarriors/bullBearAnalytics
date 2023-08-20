/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import axios from 'axios'

export const Table = () => {
    let [dataG, setData] = useState([])
    
    let info = ['1. open','2. high', '3. low', '4. close', '5. volume']

    useEffect(() => {
        const fetch = async () => {
            const data = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=1FIZJL7M2DFILOEC`)).data
            setData(data)
        }
        fetch();
    },[])
   
  return (
    <div>
        <Table>
            <tr>
                <th>Date</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Volume</th>
            </tr>

            <tr>
                <td></td>
            </tr>

        </Table>
    </div>
  )
}

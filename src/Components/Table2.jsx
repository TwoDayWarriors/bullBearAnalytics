/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'
import axios from 'axios'

export const Table2 = (symbol) => {
    let [dataG, setData] = useState([])
    let info = ['1. open','2. high', '3. low', '4. close', '5. volume']

    useEffect(() => {
        const fetch = async () => {
            const data = (await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=1FIZJL7M2DFILOEC`)).data
            setData(data)
        }
        fetch();
    },[symbol])

    let dates = dataG['Time Series (Daily)']
    let augDate = []

    for (let d in dates){
        let dateArray = d.split('-')
        if (dateArray[1] == '08'){
            augDate.push(d)

        }
    }
   
  return (
    <div>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col" className='table-light'> Date </th>
                    <th scope="col" className='table-light'> Open </th>
                    <th scope="col" className='table-light'> High </th>
                    <th scope="col" className='table-light'> Low </th>
                    <th scope="col" className='table-light'> Close </th>
                    <th scope="col" className='table-light'> Volume </th>
                </tr>
            </thead>
            <tbody>
                {augDate.map(i =>(
                    <tr key={augDate.indexOf(i)} className="table-active">
                        <td>{i}</td>
                        <td>{dates[i][info[0]]}</td>
                        <td>{dates[i][info[1]]}</td>
                        <td>{dates[i][info[2]]}</td>
                        <td>{dates[i][info[3]]}</td>
                        <td>{dates[i][info[4]]}</td>
                    </tr>
                ))}
            </tbody>

            
        </table>

        
    </div>
  )
}

import axios from "axios"
import { useEffect, useState } from 'react'

export const Dashboard = () => {
    let[info, getInfo] = useState([])

    useEffect(()=> {
        const fetch = async () => {
            const sample = (await axios.get(`https://api.stockdata.org/v1/data/quote?symbols=AAPL%2CTSLA%2CMSFT&api_token=qgPRQlhQthDjAeKfvFvVwz6SrjCR838Pd2JB6KG5`)).data
            getInfo(sample)
            console.log(sample)
        }
        fetch();
    }, [])

  return (
    <div>
        { info.data[0].name }
    </div>
  )
}

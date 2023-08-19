import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";


export const Table = () => {
    const basePath = "https://financialmodelingprep.com/api/v3/rating"
    const [stockData, setStockData] = useState([]);
    const [companySymbol, setCompanySymbol] = useState("");

    
    const fetch = async ()=>{
        const dynamicURL = `${basePath}/${companySymbol}?apikey=20a475aa3df8b11460d0357a1afad362`;

        const result = (await axios.get(dynamicURL)).data;
        console.log(result)
        setStockData(result)
    };

    useEffect(()=>{
        if(companySymbol){
            fetch();
        }
    }, [companySymbol]);
    

    

  return (
    <div className='mt-5'>
        <input 
            className="form-control form-control-lg mb-2" 
            type="text" value={companySymbol} 
            onChange={event => setCompanySymbol(event.target.value)} 
            placeholder="Enter company symbol" id="inputLarge" 
        />

        {stockData && (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col" className='table-light'>Symbol</th>
                    <th scope="col" className='table-light'>Date</th>
                    <th scope="col" className='table-light'>Rating Score</th>
                    <th scope="col" className='table-light'>Rating Recommendation</th>
                </tr>
            </thead>
            <tbody>
            {stockData.map(item => (
        
                <tr key={item.id} className="table-active">
                    <td>{item.symbol}</td>
                    <td>{item.date}</td>
                    <td>{item.ratingScore}</td>
                    <td>{item.ratingRecommendation}</td>
                </tr>
            ))}

            </tbody>
            </table>

        )}
        
    </div>
  )
}
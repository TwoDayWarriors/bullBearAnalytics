import React, { useEffect, useState } from 'react';
import Card from './Card'; // Import your Card component here
import './Dashboard.css';

const Dashboard = () => {
  const[stockDataC,setStockDataC]= useState([])
useEffect(()=>{
  const fetchData = async()=>{
    try {
      const response = await fetch("https://api.finage.co.uk/last/trade/stocks?symbols=AAPL,TSLA,AMZN&apikey=API_KEY27NDLDF7WIAIDVWVSC31D174A0ZISEJF")
      const data = await response.json()
       
      console.log(data)
      setStockDataC(data)
      
    } catch (error) {
      console.log("Error Fetching data")
    }
  }

  fetchData()
},[])
  // Fake financial data
  const financialData = [
    { title: stockDataC[0]?.symbol, amount: `${stockDataC[0]?.price} USD `},
    { title: stockDataC[1]?.symbol, amount: `${stockDataC[1]?.price} USD` },
    { title: stockDataC[2]?.symbol, amount: `${stockDataC[2]?.price} USD` },
    { title: "GOOG", amount:  " 128.17 USD" },
    { title: "MSFT", amount: " 316.48 USD" },
    { title: "BTCUSD", amount: " USD" },
    { title: "MA", amount: "369.365USD" },
    { title: "ORCL", amount: "316.103USD" },
   
   
  ];

  return (
    <div className="dashboard">
      <h1 className='title'>Financial Information</h1>
      <div className="card-grid">
        {financialData.map((data, index) => (
          <Card key={index} title={data.title} amount={data.amount}  />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import { useEffect, useState } from 'react';
import Card from './Card'; // Import your Card component here
import './Dashboard.css';
import { Table } from './Table';

import { useNavigate } from "react-router-dom";

const DashboardTest = () => {
  const[stockDataC,setStockDataC]= useState([])

  let navigate = useNavigate();

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
  const financialData = [
    { title: stockDataC[0]?.symbol, amount: `${stockDataC[0]?.price} USD `},
    { title: stockDataC[1]?.symbol, amount: `${stockDataC[1]?.price} USD` },
    { title: stockDataC[2]?.symbol, amount: `${stockDataC[2]?.price} USD` },
    { title: "GOOG", amount: "128.2 USD" },
    { title: "MSFT", amount: "316.5 USD" },
    { title: "BTCUSD", amount: "26,066.90USD" },
    { title: "MA", amount: "369.4 USD" },
    { title: "ORCL", amount: "316.1 USD" },
   
   
  ];

  const navToNewPage = (str) => {
    // console.log(str)
    if(str === "AAPL"){
      navigate("/dashboardAAPL");
    }else if(str === "TSLA"){
      navigate("/dashboardTSLA");
    }else if(str === "AMZN"){
      navigate("/dashboardAMZN");
    }
  };


  return (
    <div className="dashboard">
      <h1 className='title'>Financial Information</h1>
      <div className="card-grid">
        {financialData.map((data, index) => (
          <Card key={index} title={data.title} amount={data.amount} navToNewPage={navToNewPage} />
        ))}
      </div>
      <Table />
    </div>
  );
};

export default DashboardTest;

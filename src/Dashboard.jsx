import React from 'react';
import Card from './Card'; // Import your Card component here
import './Dashboard.css';

const Dashboard = () => {
  // Fake financial data
  const financialData = [
    { title: 'Company Name', amount: '$100,000' },
    { title: 'Company Name', amount: '$30,000' },
    { title: 'Company Name', amount: '$70,000' },
    { title: 'Company Name', amount: '70%' },
   
  ];

  return (
    <div className="dashboard">
      <h1>Financial Information</h1>
      <div className="card-grid">
        {financialData.map((data, index) => (
          <Card key={index} title={data.title} amount={data.amount} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

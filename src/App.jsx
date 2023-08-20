import Navbar from './Navbar';
import Home from './Home';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard'; // Import the Dashboard component
import SignUp from './SignUp'; 
import './App.css';
import 'bootswatch/dist/vapor/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardAAPL from './DashboardAAPL';
import DashboardTSLA from './DashboardTSLA'
import DashboardAMZN from './DashboardAMZN';
import { Table2 } from './Components/Table2';
import ChartPage from './Pages/ChartPage';

import DashboardTest from './DashboardTest';




function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/loginForm" exact={true} element={<LoginForm />} />
        <Route path="/signUp" exact={true} element={<SignUp />} />
        <Route path="/dashboard" exact={true} element={<Dashboard />} />
        {/* <Route path="/dashboardAAPL" exact={true} element={<DashboardAAPL />} /> */}
        {/* <Route path="/dashboardTSLA" exact={true} element={<DashboardTSLA />} />
        <Route path="/dashboardAMZN" exact={true} element={<DashboardAMZN />} /> */}
        <Route path="/dashboardTest" exact={true} element={<DashboardTest />} />
        <Route path="/test" exact={true} element={<Table2 symbol='IBM'/>} />
        <Route path="/dashboardAAPL" exact={true} element={<ChartPage symbol='AAPL' />} />
        <Route path="/dashboardTSLA" exact={true} element={<ChartPage symbol='TSLA' />} />
        <Route path="/dashboardAMZN" exact={true} element={<ChartPage symbol='AMZN' />} />
        </Routes>
      </BrowserRouter>

        {/* <Navbar onSelect={handleOptionSelect} />
        <div className="content">
          {selectedOption === 'Home' ? (
            <Home />
          ) : selectedOption === 'Login' ? (
            <LoginForm />
          ) : selectedOption === 'Dashboard' ? (
            <Dashboard /> // Display Dashboard component when 'Dashboard' is selected
          ) : selectedOption === 'SignUp' ? (
            <SignUp /> 
          ) : (
            <p>Displaying {selectedOption} data...</p>
          )}
        </div> */}

    </div>
  );
}

export default App;

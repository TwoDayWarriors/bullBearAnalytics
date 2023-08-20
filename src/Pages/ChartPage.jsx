import BarChart from "../Components/BarChart";
import DoughnutChart from "../Components/DoughnutChart";
import PieChart from "../Components/PieChart";
import { LineChart } from '../Components/LineChart';
import { LineChart2 } from '../Components/LineChart2';
import { Volume } from '../Components/Volume'
import { Table2 } from "../Components/Table2";
import '../DashboardAAPL.css'


const ChartPage = () => {
  return (
    <div className="home">
      
      <h1>Apple</h1>
      <div className="charts-container">
        
      
        {/* <div className="chart">
        <p>International Filings </p>
          <BarChart symbol="AAPL"/>
        </div>
        <div className="chart">
        <p>Company Financial Statements </p>
          <DoughnutChart symbol="AAPL" />
        </div>
        <div className="chart">
        <p> Company Enterprise Value </p>
          <PieChart symbol="AAPL" />
        </div> */}

        <br/>

        <div className="chart">
        <p> Price by Date </p>
          <LineChart symbol="AAPL" />
        </div>

        <div className="chart">
        <p> Daily Price</p>
          <LineChart2 symbol="AAPL" />
        </div>

        <div className="chart">
        <p> Volume Month of August </p>
          <Volume symbol="AAPL" />
        </div>

        <br/>
        
        <div className="chart">
          <Table2 />
        </div>
        

    </div>
    </div>
  );
};

export default ChartPage;

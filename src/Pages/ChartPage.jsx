import BarChartAAPL from "./BarChartAAPL";
import DoughnutChartAAPL from "./DoughnutChartAAPL";
import PieChartAAPL from "./PieChartAAPL";
import './DashboardAAPL.css';
import { LineChart } from './Components/LineChart';


const DashboardAAPL = () => {
  return (
    <div className="home">
      
      <h1>Apple</h1>
      <div className="charts-container">
        
      
        <div className="chart">
        <p>International Filings </p>
          <BarChartAAPL />
        </div>
        <div className="chart">
        <p>Company Financial Statements </p>
          <DoughnutChartAAPL />
        </div>
        <div className="chart">
        <p> Company Enterprise Value </p>
          <PieChartAAPL />
        </div>
        <br/>
        <div className="chart">
        <p> Company Enterprise Value </p>
          <LineChart symbol="AAPL" />
        </div>

      </div>
    </div>
  );
};

export default DashboardAAPL;

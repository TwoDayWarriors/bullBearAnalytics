import BarChartTSLA from "./BarChartTSLA";
import DoughnutChartTSLA from "./DoughnutChartTSLA";
import PieChartTSLA from "./PieChartTSLA";

import './DashboardAAPL.css';
const DashboarTSLA = () => {
  return (
    <div className="home">
      
      <h1>TSLA</h1>
      <div className="charts-container">
        
      
        <div className="chart">
        <p>International Filings </p>
          <BarChartTSLA/>
        </div>
        <div className="chart">
        <p>Company Financial Statements </p>
          <DoughnutChartTSLA/>
        </div>
        <div className="chart">
        <p> Company Enterprise Value </p>
          <PieChartTSLA/>
        </div>
      </div>
    </div>
  );
};

export default DashboarTSLA;


import BarChartAMZN from './BarChartAMZN';
import './DashboardAAPL.css';
import DoughnutChartAMZN from './DoughnutChartAMZN';
import PieChartAMZN from './PieChartAMZN';
const DashboardAMZN = () => {
  return (
    <div className="home">
      
      <h1>Amazon</h1>
      <div className="charts-container">
        
      
        <div className="chart">
        <p>International Filings </p>
          <BarChartAMZN/>
        </div>
        <div className="chart">
        <p>Company Financial Statements </p>
          <DoughnutChartAMZN/>
        </div>
        <div className="chart">
        <p> Company Enterprise Value </p>
          <PieChartAMZN/>
        </div>

        
        

       
      </div>
    </div>
  );
};

export default DashboardAMZN;

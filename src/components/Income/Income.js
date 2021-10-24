import './income.css';
import { connect } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Component to display cards
const Income = ({ incomeCard, incomeData }) => {
  return (
    <div className="incomeContainer">
      <div className="income">
        <div className="incomeCardItem">
          <h3 className="incomeChartTitle">{incomeData[0].title}</h3>
          <p className="incomeChartLegend">{incomeData[0].legend}</p>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={incomeCard[0]}>
              <XAxis dataKey={incomeData[0].dataKey} stroke="gray" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="income"
                stroke={incomeData[0].stroke}
              />
              <Tooltip />
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="incomeCardItem">
          <h3 className="incomeChartTitle">{incomeData[1].title}</h3>
          <p className="incomeChartLegend">{incomeData[1].legend}</p>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={incomeCard[1]}>
              <XAxis dataKey={incomeData[1].dataKey} stroke="gray" />
              <YAxis />
              <Line
                type="monotone"
                dataKey="income"
                stroke={incomeData[1].stroke}
              />
              <Tooltip />
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { incomeCard: state.incomeCard, incomeData: state.incomeData };
};

export default connect(mapStateToProps, {})(Income);

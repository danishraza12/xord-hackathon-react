import "./chart.css"
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Component to create Hospital Surver Chart
const Chart = ({ data }) => {
  return ( 
    <div className="chartsContainer">
      <div className="chart">
        <div className="chartItem">
          <h3 className="chartTitle">Hospital Survey</h3>
          <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
              <XAxis dataKey="x_name" stroke="gray" />
              <YAxis />
              <Line type="monotone" dataKey="Patients 2019" stroke="#5550bd" />
              <Line type="monotone" dataKey="Patients 2020" stroke="yellow" />
              <Legend />
              <Tooltip />
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

// Getting chart data from chartReducer
const mapStateToProps = state => {
  return { data: state.data }
}

export default connect(mapStateToProps, {})(Chart)
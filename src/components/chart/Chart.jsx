import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}){

    return(
        <div className="chart p-5 m-5">
            <h3 className="chartfile mb-5">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
     {  grid && <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />}
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
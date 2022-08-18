import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart(){

    const data = [
        {
          name: 'Jan',
          "Active User": 4000,
       
        },
        {
          name: 'Feb',
          "Active User": 3000,
        },
        {
          name: 'Mar',
          "Active User": 5000,
        },
        {
          name: 'Apr',
          "Active User": 4000,
        },
        {
          name: 'May',
          "Active User": 3000,
        },
        {
          name: 'Jun',
          "Active User": 2000,
        },
        {
          name: 'Jul',
          "Active User": 4000,
        },
        {
            name: 'Aug',
            "Active User": 3000,
          },
          {
            name: 'Sept',
            "Active User": 4000,
          },
          {
            name: 'Oct',
            "Active User": 1000,
          },
          {
            name: 'Nov',
            "Active User": 4000,
          },
          {
            name: 'Dec',
            "Active User": 3000,
          },
      ];



    return(
        <div className="chart p-5 m-5">
            <h3 className="chartfile mb-5">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />
          <Legend stroke="#000"/>
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
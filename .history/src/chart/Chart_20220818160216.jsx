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
          "Active User": 4000,
      
          
        },
        {
          name: 'Page D',
          "Active User": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          "Active User": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          "Active User": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          "Active User": 3490,
          pv: 4300,
          amt: 2100,
        },
      ];



    return(
        <div className="chart p-5 m-5">
            <h3 className="chartfile mb-5">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
import { ComposedChart, XAxis,  YAxis, Tooltip, Legend, CartesianGrid, Area, Bar, Line} from 'recharts';
import data from "./dataComposed"

function ChartComposed({active}){
  
    return (
      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="year" />
        <YAxis type="number" domain={[3, 6]}/>
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area isAnimationActive={active} type="monotone" dataKey="health" fill="#8884d8" stroke="#8884d8" />
        <Bar isAnimationActive={active} dataKey="happinessScore" barSize={20} fill="#413ea0" />
        <Line isAnimationActive={active} type="monotone" dataKey="socialSupport" stroke="#ff7300" />
      </ComposedChart>
    )
}

export default ChartComposed
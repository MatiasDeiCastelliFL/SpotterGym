import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export default function WeightChart({ initialWeight, data }:any) {
  const [weightData, setWeightData] = useState<any>([]);

  // Actualiza weightData cuando initialWeight cambia
  useEffect(() => {
    //setWeightData((prevWeightData) => [
    //  ...prevWeightData,
    //  { name: 'Peso', Peso: initialWeight },
    //]);

    setWeightData([...weightData, { name: 'Peso', Peso: initialWeight }]);
  }, [initialWeight, weightData]);

  return (
    <LineChart width={300} height={300} data={weightData}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='Peso'
        stroke='#8884d8'
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

import React from "react";
import { useMeasure } from "react-use";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./index.css";

export const App = () => {
  const [containerRef] = useMeasure(); 

  const data = [
    { timestamp: "1519780251293", start: 4000, stop: 2400 },
    { timestamp: "1519780251293", start: 3000, stop: 1398 },
    { timestamp: "1519780260201", stop: 2000, span: 9800 },
    { timestamp: "1519780260201", stop: 2780, span: 3908 },
  ];

  return (
    <div id="container" ref={containerRef}>
      <h2>Intelie Chart Plotter</h2>
      <br />
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="start" stroke="#100f20" />
        <Line type="monotone" dataKey="stop" stroke="#ddd4d8" />
        <Line type="monotone" dataKey="span" stroke="#aaa4d8" />
        <Line type="monotone" dataKey="data" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default App;

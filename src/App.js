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
    {
      timestamp: "1234",
      uv: 4000,
      pv: 2400,
    }
  ];

  return (
    <div id="container" ref={containerRef}>
      <form>
        <label>
          Type:
          <select>
            <option value="data">data</option>
            <option value="span">span</option>
            <option value="start">start</option>
            <option value="stop">stop</option>
          </select>
        </label>

        <label>
          Timestamp:
          <input type="text" name="timestamp" />
        </label>

        <label>
          OS:
          <select>
            <option value="Windows">Windows</option>
            <option value="Linux">Linux</option>
            <option value="MacOs">MacOs</option>
          </select>
        </label>

        <label>
          Browser:
          <select>
            <option value="Chrome">Chrome</option>
            <option value="Firefox">Firefox</option>
            <option value="Edge">Edge</option>
          </select>
        </label>

        <label>
          MaxResponseTime:
          <input type="text" name="maxResponseTime" />
        </label>

        <label>
          MinResponseTime:
          <input type="text" name="minResponseTime" />
        </label>


        <input type="submit" value="Enviar" />
      </form>

      <h2>Intelie Chart Plotter</h2>
      <br />
      <LineChart
        width={1000}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend align="right" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#20afd8" />
      </LineChart>
    </div>
  );
};

export default App;

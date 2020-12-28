import React, { useReducer, useState } from "react";

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

import "./App.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export const App = () => {
  const [containerRef] = useMeasure();
  const [formData, setFormData] = useReducer(formReducer, {});

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
  };

  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  const data = [
    {
      timestamp: formData.timestamp,
      os: formData.os,
      browser: formData.browser,
      responseTime: formData.maxResponseTime - formData.minResponseTime,
    },
  ];

  return (
    <div id="container" ref={containerRef}>
      <form onSubmit={handleSubmit}>
        <label>
          Type:
          <select onChange={handleChange} name="Type" value={formData.type}>
            <option value="">--choose--</option>
            <option value="data">data</option>
            <option value="span">span</option>
            <option value="start">start</option>
            <option value="stop">stop</option>
          </select>
        </label>

        <label>
          Timestamp:
          <input
            type="text"
            name="timestamp"
            onChange={handleChange}
            value={formData.timestamp}
          />
        </label>

        <label>
          OS:
          <select onChange={handleChange} name="OS" value={formData.os}>
            <option value="">--choose--</option>
            <option value="Windows">Windows</option>
            <option value="Linux">Linux</option>
            <option value="MacOs">MacOs</option>
          </select>
        </label>

        <label>
          Browser:
          <select
            onChange={handleChange}
            name="Browser"
            value={formData.browser}
          >
            <option value="">--choose--</option>
            <option value="Chrome">Chrome</option>
            <option value="Firefox">Firefox</option>
            <option value="Edge">Edge</option>
          </select>
        </label>

        <label>
          MinResponseTime:
          <input
            type="text"
            name="minResponseTime"
            onChange={handleChange}
            value={formData.minResponseTime}
          />
        </label>

        <label>
          MaxResponseTime:
          <input
            type="text"
            name="maxResponseTime"
            onChange={handleChange}
            value={formData.maxResponseTime}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <div className="wrapper">
        {submitting && (
          <div>
            Completed form data
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}>
                  <strong>{name}</strong>:{value}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <h2>Intelie Chart Plotter</h2>
      <br />
      <LineChart
        width={1000}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis dataKey="responseTime" />
        <XAxis />
        <Tooltip />
        <Legend align="center" />
        <Line
          type="monotone"
          dataKey="Linux"
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  );
};

export default App;

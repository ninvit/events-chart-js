import React, { useState } from "react";
import EventoTable from "./tables/EventoTable";
import AddEventoForm from "./forms/AddEventoForm";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const App = () => {
  const eventosData = [];

  const [eventos, setEventos] = useState(eventosData);

  const addEvento = (evento) => {
    evento.id = eventos.length + 1;
    setEventos([...eventos, evento]);
  };

  const deleteEvento = (id) => {
    setEventos(eventos.filter((evento) => evento.id !== id));
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div>
          <AddEventoForm addEvento={addEvento} />
        </div>
        <div className="flex-large">
          <h2>Events chart</h2>
          <LineChart
            width={900}
            height={300}
            data={eventos}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="os"/>
            <YAxis dataKey="maxResponse" />
            <Tooltip />
            <Legend />
            {eventos.map((e) =>
            <Line datakey="maxResponse" />)}
          </LineChart>
          <h2>View events</h2>
          <EventoTable eventos={eventos} deleteEvento={deleteEvento} />
        </div>
      </div>
    </div>
  );
};

export default App;

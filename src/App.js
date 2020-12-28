import React, { useState } from "react";
import EventoTable from "./tables/EventoTable";
import AddEventoForm from "./forms/AddEventoForm";

const App = () => {
  const eventosData = [];

  const [eventos, setEventos] = useState(eventosData);

  const addEvento = (evento) => {
    evento.id = eventos.length + 1;
    setEventos([...eventos, evento]);
  };

  return (
    <div className="container">
      <div className="flex-row">
        <div>
          <AddEventoForm addEvento={addEvento} />
        </div>
        <div className="flex-large">
          <h2>Chart Plotter</h2>
          <h2>View events</h2>
          <EventoTable eventos={eventos} />
        </div>
      </div>
    </div>
  );
};

export default App;

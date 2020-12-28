import React, { useState } from "react";

const AddEventoForm = (props) => {
  const initialFormState = { id: null, type: "", timestamp: "" };
  const [evento, setEvento] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setEvento({ ...evento, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!evento.type || !evento.timestamp) return;

        props.addEvento(evento);
        setEvento(initialFormState);
      }}
    >
      <label>Type</label>
      <input
        type="text"
        name="type"
        value={evento.type}
        onChange={handleInputChange}
      />

      <label>Timestamp</label>
      <input
        type="text"
        name="timestamp"
        value={evento.timestamp}
        onChange={handleInputChange}
      />

      <label>OS</label>
      <input
        type="text"
        name="os"
        value={evento.os}
        onChange={handleInputChange}
      />

      <label>Browser</label>
      <input
        type="text"
        name="browser"
        value={evento.browser}
        onChange={handleInputChange}
      />

      <label>MinResponse</label>
      <input
        type="text"
        name="minResponse"
        value={evento.minResponse}
        onChange={handleInputChange}
      />

      <label>MaxResponse</label>
      <input
        type="text"
        name="maxResponse"
        value={evento.maxResponse}
        onChange={handleInputChange}
      />
      <button>Add new event</button>
    </form>
  );
};

export default AddEventoForm;

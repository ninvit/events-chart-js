import React, { useState } from "react";

const AddEventoForm = (props) => {
  const initialFormState = {
    id: null,
    type: "",
    timestamp: "",
    os: "",
    browser: "",
    minResponse: "",
    maxResponse: "",
  };

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
      <select onChange={handleInputChange} name="type" value={evento.type}>
        <option value="">--select--</option>
        <option value="data">data</option>
        <option value="span">span</option>
        <option value="start">start</option>
        <option value="stop">stop</option>
      </select>

      <label>Timestamp</label>
      <input
        type="datetime-local"
        name="timestamp"
        value={evento.timestamp}
        onChange={handleInputChange}
      />

      <label>OS</label>
      <select onChange={handleInputChange} name="os" value={evento.os}>
        <option value="">--select--</option>
        <option value="Windows">Windows</option>
        <option value="Linux">Linux</option>
        <option value="MacOs">MacOs</option>
      </select>

      <label>Browser</label>
      <select onChange={handleInputChange} name="browser" value={evento.browser}>
        <option value="">--choose--</option>
        <option value="Chrome">Chrome</option>
        <option value="Firefox">Firefox</option>
        <option value="Edge">Edge</option>
      </select>

      <label>MinResponse</label>
      <input
        type="number"
        name="minResponse"
        value={evento.minResponse}
        onChange={handleInputChange}
      />

      <label>MaxResponse</label>
      <input
        type="number"
        name="maxResponse"
        value={evento.maxResponse}
        onChange={handleInputChange}
      />
      <button>Add new event</button>
    </form>
  );
};

export default AddEventoForm;

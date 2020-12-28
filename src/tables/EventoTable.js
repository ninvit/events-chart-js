import React from "react";

const EventoTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Timestamp</th>
        <th>OS</th>
        <th>Browser</th>
        <th>MinResponse</th>
        <th>MaxResponse</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.eventos.length > 0 ? (
        props.eventos.map((evento) => (
          <tr key={evento.id}>
            <td>{evento.type}</td>
            <td>{evento.timestamp}</td>
            <td>{evento.os}</td>
            <td>{evento.browser}</td>
            <td>{evento.minResponse}</td>
            <td>{evento.maxResponse}</td>
            <td>
              <button
                onClick={() => props.deleteEvento(evento.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7}>No eventos</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default EventoTable;

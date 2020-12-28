import React from 'react'

const EventoTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Type</th>
        <th>Timestamp</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.eventos.length > 0 ? (
        props.eventos.map((evento) => (
          <tr key={evento.id}>
            <td>{evento.type}</td>
            <td>{evento.timestamp}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No eventos</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default EventoTable
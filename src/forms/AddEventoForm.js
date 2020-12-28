import React, { useState } from 'react'

const AddEventoForm = (props) => {
  const initialFormState = { id: null, type: '', timestamp: '' }
  const [evento, setEvento] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEvento({ ...evento, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!evento.type || !evento.timestamp) return

        props.addEvento(evento)
        setEvento(initialFormState)
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
      <button>Add new evento</button>
    </form>
  )
}

export default AddEventoForm
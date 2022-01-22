import React, { useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { v4 as uuid } from 'uuid'

import App from '../layouts/App'

const ToDoList = () => {
  const [task, setTask] = useState('')
  
  const handleChange = event => {
    setTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatchEvent(new CustomEvent('@mfe/react-single/todo/add-task', 
    { detail: 
      {
        id: uuid(),
        name: task
      } 
    }
    ))
    setTask('')
  }

  return (
  <App>
    <h1>To do list</h1>
    <form onSubmit={handleSubmit}>
      <input value={task} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
    <Parcel config={() => System.import('@mfe/react-parcel')}/>
  </App>
)}

export default ToDoList
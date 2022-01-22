import React from "react"
import { Link } from "react-router-dom"

const App = ({ children }) =>  (
  <main>
    <h1>Microfrontends example with React and Single SPA</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/to-do-list">To do list</Link>
        </li>
      </ul>
    </nav>
    {children}
  </main>
)
  

export default App
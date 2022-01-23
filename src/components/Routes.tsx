import React from 'react'

import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import ToDoList from '../pages/ToDoList'
import Home from '../pages/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/to-do-list" component={ToDoList} />
    </Switch>
  </BrowserRouter>
)

export default Routes
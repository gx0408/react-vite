// App.jsx
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom"
import routes from '@/router'
function App() {
  return <HashRouter>
    <Switch>
      {
        routes.map(route => <Route exact key={route.path} path={route.path}>
          <route.component />
        </Route>)
      }
    </Switch>
  </HashRouter>
}

export default App


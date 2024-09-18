import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import RoutesLayout from './pages/routes/routes'
function App() {
  return (
    <Router>
      <RoutesLayout />
    </Router>
  )
}

export default App
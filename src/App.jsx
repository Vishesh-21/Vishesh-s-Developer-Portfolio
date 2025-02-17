import React from 'react'
import { Home } from './Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import { AllProjects } from './components/DashBoard/dashComp/AllProjects'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<AllProjects/>}/>
      </Routes>
    </Router>
  )
}

export default App
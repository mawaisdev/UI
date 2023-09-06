import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SideBar, Home } from './components'

const App = () => {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

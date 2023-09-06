import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SideBar, Home, Footer, Videos } from './components'

const App = () => {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

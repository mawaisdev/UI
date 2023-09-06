import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  SideBar,
  Home,
  Footer,
  Videos,
  Upload,
  Login,
  Signup,
} from './components'

const App = () => {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

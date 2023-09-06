import { Button } from '@chakra-ui/react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Button colorScheme={'telegram'} m={'10'}>
        Click
      </Button>
      <Routes>
        <Route path='/' element={''} />
      </Routes>
    </Router>
  )
}

export default App

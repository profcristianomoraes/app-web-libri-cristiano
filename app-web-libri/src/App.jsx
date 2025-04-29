import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from './components/layouts/NavBar'
import Container from './components/layouts/Container'
import Home from './components/pages/Home'
import Createbooks from './components/pages/CreateBook'
import ListBooks from './components/pages/Listbooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Container>
        <NavBar /> 
        {/* <Home />
        <Createbooks /> */}
        <ListBooks />
      </Container>
        
    </>
  )
}

export default App

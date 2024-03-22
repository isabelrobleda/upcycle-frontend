import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Form />
    </>
  )
}

export default App

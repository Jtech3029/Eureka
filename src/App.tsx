import { useEffect, useState } from 'react'
import Subject from './components/Subject'
import './styles/App.css'

declare global {
  interface Window {
    api: any
  }
}

function App() {
  const [x, setX] = useState();
  useEffect(() => {
    async function hello() {
      const fellow = await window.api.onUpdate();
      setX(fellow[0])
    }
    hello()
  },[])
  return (
    <>
      <Subject/>
    </>
  )
}

export default App

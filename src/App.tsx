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
      console.log(fellow[0].Crack)  
      setX(fellow[0])
    }
    hello()
  },[])
  return (
    <>
    {x && x["Supplementary Material"]}
    {x && x["Question"]}
      <Subject/>
    </>
  )
}

export default App

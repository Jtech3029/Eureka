import { useEffect, useState } from 'react'
import Subject from './components/Subject'
import './styles/App.css'

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
    {x.Column1}
      <Subject/>
    </>
  )
}

export default App

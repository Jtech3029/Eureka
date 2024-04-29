import { useEffect, useState } from 'react'
import Subject from './components/test/SubjectTest'
import './styles/App.css'
import LangTest from './components/test/aplang/LangTest';

declare global {
  interface Window {
    api: any
  }
}

function App() {
  const [x, setX] = useState([]);
  useEffect(() => {
    async function hello() {
      const fellow = await window.api.onUpdate();
      setX(fellow)
    }
    hello()
  },[])
  return (
    <>
    <Subject questions={x}></Subject>
    </>
  )
}

export default App

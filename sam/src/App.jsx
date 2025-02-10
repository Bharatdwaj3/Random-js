import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import C1 from './component/C1'
function App() {
  const [count, setCount] = useState(0)
  const [formv,setformv]=useState({})
  const namref=useRef()
  function handleform(e){
    const {name,value}=e.target;
    e.preventDefault();
    console.log("value is",value);
    setformv({
      
      name:namref.current.value
    })
    
  }
  console.log("data",formv)

  return (
  
    <>
      <C1 name="sam">hell</C1>
      <form onSubmit={(e)=>{handleform(e)}}>
        <input type="text" name="name"   ref={namref}></input>
        <input type="text" name="password" onChange={handleform}></input>
      <button >click</button>
      </form>
    </>
  )
}

export default App

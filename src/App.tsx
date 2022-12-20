import { useState } from 'react'
import './App.css'
import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext'
import "primereact/resources/primereact.min.css";   
import { Question } from './components/Question';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      <div className="card">
      <Question/>
      </div>
      
    </div>
  )
}

export default App

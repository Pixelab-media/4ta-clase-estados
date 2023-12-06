import './App.css'
import AgregarGasto from './components/AgregarGasto'
import Contador from './components/Contador'
import GastoMes from './components/GastoMes'
import { useState } from "react"

const App = () =>{
  const [ gastos, setGastos ] = useState([1500, 300])
 
  return (
    <div>
      <Contador gastosContador={gastos}/>
      <GastoMes gastoMes={gastos}/>
      <AgregarGasto setGastos={setGastos}/>
      
    </div>
  )
}

export default App
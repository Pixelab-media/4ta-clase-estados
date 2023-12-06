import { useState } from "react";

function Listado  (){
  const [gastos, setGastos] = useState (["Ir a clase", "Ir a GYM", "Cocinar"])

return (
  <ul>
    {gastos.map ((gasto) =>(
      <li key = {gasto}>{gasto}</li>
    ))}
  </ul>
);
}

export default Listado
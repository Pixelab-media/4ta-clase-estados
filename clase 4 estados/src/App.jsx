// import { useState, useEffect } from 'react'
// import './App.css'


// const App = () =>{

//   const [ mostrarModal, setMostrarModal ] = useState (false)
 
//   const handleClickAbrir = () => {
//     setMostrarModal(true)
//     console.log("hola")
//   }
//   const handleClickCerrar = () => {
//     setMostrarModal(false)
//   }

//   return (
//     <div>
      
//         <h1>Clase de modal</h1>
//         <button onClick={handleClickAbrir}>Abrir modal</button>

//         {mostrarModal &&

//         <div className='atras'>
          
//           <div className='modal'>
//             <button onClick={handleClickCerrar}>X</button>
//             <h2>Soy un modal</h2>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, deleniti?</p>
            
//           </div>
//         </div>
//         }
//     </div>
//   )
// }

// export default App


import { useState, useEffect } from 'react'
import './App.css'


const App = () =>{

  const [ count, setCount ] = useState(0)
  const [ count2, setCount2 ] = useState(0)

  useEffect(() => {
    document.title = `me hicieron click ${count} veces.`
  },[count2]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount2(count2 + 1)}>hacer click 2</button>
      <button onClick={() => setCount(count + 1)}>hacer click</button>
    </div>
  )
}

export default App
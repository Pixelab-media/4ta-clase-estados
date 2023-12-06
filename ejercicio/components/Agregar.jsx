function Agregar () {
    function handleSubmit (event) {
      event.preventDefault ();
      const gasto = event.target.elements.gasto.value;
      console.log (gasto)
    }
  
  return (
    <form onSubmit = {handleSubmit}>
      <input autocomplete="off" type = "text" id = "gasto"/>
      <button type="Submit"> Agregar gasto </button>
    </form>
  )
  }

  export default Agregar
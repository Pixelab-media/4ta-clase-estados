
const AgregarGasto = ({ setGastos }) => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        const variableGasto = e.target.elements.gasto.value;
        setGastos(e =>[ e, variableGasto ])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input autoComplete="off" type="number" id="gasto"/>
            <button type="Submit">Agregar Gasto</button>
        </form>
    )
}

export default AgregarGasto

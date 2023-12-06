

const GastoMes = ({gastoMes}) => {
   

    return(
        <ul>
            {gastoMes.map((gasto) => (
                <li key ={gasto}>
                    {gasto}
                </li>
            ))
            }
        </ul>
    )
}

export default GastoMes
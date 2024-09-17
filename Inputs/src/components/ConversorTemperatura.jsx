import React, { useState } from 'react'

function ConversorTemperatura() {
    const [temperaturaCelsius, setTemperaturaCelsius] = useState()
    const [resultado, setResultado] = useState()

    // Calculos

    
    return (
        <div>
            <h1>Conversor de temperatura</h1>

            Conversor de temperatura, Celsius para Farenheit
            <br />
            Digite a temperatura que deseja converter:
            <br />
            <input type="number"
                value={temperaturaCelsius}
                onChange={(event) => { setTemperaturaCelsius(event.target.value) }} />
            <br /><br />
            <button onClick={converter}>Converter para Farenheit</button>
            <br />
            {resultado}
        </div>
    )
}

export default ConversorTemperatura

import React, { useState } from 'react'
import './ConversorTemperatura.css'

function ConversorTemperatura() {
    const [celsius, setCelsius] = useState('')
    const [fahrenheit, setFahrenheit] = useState(null)

    function converter() {
        const resultado = (Number(celsius) * 9 / 5) + 32
        setFahrenheit(resultado)
    }

    return (
        <div className='temperatura-container'>
            <h1>Conversor de temperatura</h1>
            <h3>de Celsius para Fahrenheit</h3>

            Digite a temperatura que deseja converter:
            <br />
            <input type="number"
                value={celsius}
                onChange={(event) => { setCelsius(event.target.value) }}
                placeholder='Insira a temperatura em celsius' />
            <br /><br />
            <button onClick={converter}>Converter</button>
            <br />
            Temperatura em fahrenheit: {fahrenheit}°F
        </div>
    )
}

export default ConversorTemperatura

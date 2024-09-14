import React, { useState } from 'react'
import './ParEImpar.css'

function ParEImpar() {
    const [numero, setNumero] = useState()
    const [saida, setSaida] = useState('')

    function verificarNumero() {

        let restoDivisao = numero % 2

        if (restoDivisao == 0) {
            setSaida('O número é par!')
        } else if (restoDivisao != 0) {
            setSaida('O número é impar!')
        }

    }
    return (
        <div className='numeroParImpar-container'>
            <h1>Números par e impar</h1>
            <p>Digite um número para ver se ele é par ou impar:</p>
            <input type="number"
                value={numero}
                onChange={(event) => { setNumero(event.target.value) }} />
            <br /><br />
            <button onClick={verificarNumero}>Verificar número</button>
            <br />
            Resultado: {saida}
        </div>
    )
}

export default ParEImpar

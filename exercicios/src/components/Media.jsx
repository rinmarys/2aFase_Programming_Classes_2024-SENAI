import React from 'react'
import { useState } from 'react'
import './Media.css'

function Media() {
    const [resultado, setResultado] = useState()

    function Calcular(params) {
        let notaUm = Number(prompt('Digite a 1a nota:'))
        let notaDois = Number(prompt('Digite a 2a nota:'))

        let mediaFinal = (notaUm + notaDois) / 2

        setResultado(mediaFinal)
    }

    return (

        <center>

            <div className='Media-container'>
                <h2>Exercício para calcular média de 2 números</h2>

                Média: {resultado}
                <br /><br />

                <button onClick={Calcular}>Calcular</button>
            </div>

        </center>
    )
}

export default Media

import React from 'react'
import { useState } from 'react'

function StarUber() {
    const [resultado, setResultado] = useState()

    function descobrirTempo(params) {
        
        let distanciaCorrida =  Number('Digite a distancia da sua viagem (em quilometros):')
        let velocidadeSegundos = 300000

        // Calculos

        

        
    }

    return (
        <div>
            <h1>Star Ubers</h1>
            <h3>Prepare-se para sua viagem espacial e descubra quanto tempo levará sua viagem!</h3>

            <button onClick={descobrirTempo}>Descubrir</button>

            {resultado}
        </div>
    )
}

export default StarUber

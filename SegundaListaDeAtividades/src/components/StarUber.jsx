import React from 'react'
import { useState } from 'react'

function StarUber() {
    const [resultado, setResultado] = useState()

    function descobrirTempo(params) {
        
        let distanciaCorrida =  Number(prompt('Digite a distancia da sua viagem (em quilometros):'))
        let velocidadeSegundos = 300000

        // Calculos

        let segundos = distancia / velocidadeSegundos
        let minutos = segundos / 60
        let horas = segundos / 3600
        let dias = segundos / 86400
        let meses = dias / 30
        let anos = dias / 365

        setResultado(
            `Tempo levado para percorrer ${distanciaCorrida} km: ` +
            `${anos.toFixed(2)} anos, ` +
            `${(meses.toFixed(2) % 12)} meses, ` +
            `${(dias.toFixed(2) % 30)} dias, ` +
            `${(horas.toFixed(2) % 24)} horas, ` +
            `${(minutos.toFixed(2) % 60)} minutos, ` +
            `e ${(segundos.toFixed(2) % 60)} segundos. `
        )

    }

    return (
        <center>
            <div>
                <h1>Star Ubers</h1>
                <h3>Prepare-se para sua viagem espacial e descubra quanto tempo levará sua viagem!</h3>

                <button onClick={descobrirTempo}>Descubrir</button>

                {resultado}
            </div>
        </center>
    )
}

export default StarUber

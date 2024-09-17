import React, { useState } from 'react'
import './VerificandoLetras.css'

function VerificandoLetras() {
    const [letra, setLetra] = useState()
    const [saida, setSaida] = useState()

    function verificarLetra() {

        if (letra >= 'A' && letra <= 'Z') {

            setSaida('A letra que você digitou é maiuscula')
            
        }else if(letra >= 'a' && letra <= 'z'){

            setSaida('A letra que você digitou é minuscula.')

        }else{
            setSaida('Letra invalida.')
        }
        
    }
    return (
        <div className='verificandoLetras-container'>
            <h1>Verificando letras</h1>

            Escreva uma letra e diremos se ela é maiuscula ou minuscula
            <br />
            <input type="text"
                value={letra}
                onChange={(event) => { setLetra(event.target.value) }} />
            <br /><br />
            <button onClick={verificarLetra}>verificar</button>
            <br />
            {saida}
        </div>
    )
}

export default VerificandoLetras

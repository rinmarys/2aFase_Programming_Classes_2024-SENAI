// 5.29 - Copo meio cheio: Ler um número e informar se ele é positivo, 
// negativo ou nulo.

import React from 'react'
import { useState } from 'react'
import './NumPositivoNegativo.css'

function NumPositivoNegativojsx() {
  const [resultado, setResultado] = useState()

  function definirNumero(params) {

    let numeroInformado = Number(prompt('Digite um número:'))

    if (numeroInformado > 0) {
      setResultado('Positivo!!!😁')

    } else if (numeroInformado < 0) {
      setResultado('NEGATIVOOO😨')

    } else {
      setResultado('nulo😔')

    }

  }

  return (

    <center>

      <div className='numeros-positivo-negativo-nulo'>

        <h2>Número positivo, negativo e nulo</h2>
        <h3>Clique e digite um número, vamos informar se ele é positivo, negativo ou nulo.</h3>

        <button onClick={definirNumero}>Clique para saber🤯👀</button>
        <br />
        Seu número é: {resultado}

      </div>

    </center>
  )
}

export default NumPositivoNegativojsx
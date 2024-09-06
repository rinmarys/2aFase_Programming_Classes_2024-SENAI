// 5.30 - Dois copos meio cheios: Faça um programa para ler um número e 
// imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
// tempo.

import React from 'react'
import { useState } from 'react'
import './ImprimirNumero.css'

function ImprimirNumero() {

    const [resultado, setResultado] = useState()

    function imprimir(params) {

        let numeroDigitado = Number(prompt('Digite um número:'))

        let restoDivisao = numeroDigitado % 2

        if (restoDivisao != 0 && numeroDigitado < 0) {

            setResultado('Número impar e negativo')

        } else if (restoDivisao != 0 && numeroDigitado > 0) {

            setResultado('Número impar e positivo')

        } else if (restoDivisao == 0 && numeroDigitado < 0) {

            setResultado('Número par e negativo')

        } else if (restoDivisao == 0 && numeroDigitado > 0) {

            setResultado('Número par e positivo')

        } else {
            setResultado('Número nulo')
        }
    }

    return (
        <center>

            <div className='imprimirNumeros-Container'>
                <h2>Sistema para imprimir números</h2>
                <h4>Aperte o botão, digite um número e iremos falar se ele é par e positivo!</h4>

                <button onClick={imprimir}>Imprimir número</button>
                <br />
                {resultado}
            </div>

        </center>
    )
}

export default ImprimirNumero

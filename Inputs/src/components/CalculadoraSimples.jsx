// Calculadora Simples: Crie uma calculadora simples que peça ao usuário 
// dois números e uma operação (adição, subtração, multiplicação ou divisão
// ) e, em seguida, exiba o resultado.

import React, { useState } from 'react'
import './CalculadoraSimples.css'

function CalculadoraSimples() {
    const [numeroUm, setNumeroUm] = useState()
    const [numeroDois, setNumeroDois] = useState()
    const [resultado, setResultado] = useState()

    function adicao() {
        setResultado(Number(numeroUm) + Number(numeroDois))
    }

    function substracao() {
        setResultado(Number(numeroUm) - Number(numeroDois))
    }

    function divisao(params) {
        setResultado(Number(numeroUm) / Number(numeroDois))
    }

    function multiplicacao(params) {
        setResultado(Number(numeroUm) * Number(numeroDois))
    }

    return (
        <div className='calculadora-container'>
            <h1>Calculadora simples</h1>

            Digite o primeiro número:                                                                        
            <br />
            <input type="number"
                value={numeroUm}
                onChange={(event) => { setNumeroUm(event.target.value) }} />
            <br />

            Digite o segundo número:
            <br />
            <input type="number"
                value={numeroDois}
                onChange={(event) => { setNumeroDois(event.target.value) }} />
            <br /><br />

            <button onClick={adicao}>+</button> <button onClick={substracao}>-</button>
            <br />
            <button onClick={divisao}>/</button> <button onClick={multiplicacao}>x</button>

            <br /><br />
            O resultado da conta é: {resultado}
        </div>
    )
}

export default CalculadoraSimples

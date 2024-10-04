import React, { useState } from 'react'
import './CalculadoraIMC.css'

function CalculadoraIMC() {
    const [pesoPessoa, setPesoPessoa] = useState('')
    const [alturaPessoa, setAlturaPessoa] = useState('')
    const [resultadoIMC, setResultadoIMC] = useState(null)
    const [resultadoFaixa, setResultadoFaixa] = useState('')

    function verificarIMC() {

        const peso = Number(pesoPessoa)
        const altura = Number(alturaPessoa)

        const imc = peso / (altura ** 2)
        setResultadoIMC(imc.toFixed(2))

        if (imc < 18.5) {
            setResultadoFaixa('Abaixo do peso.')   
        }else if(imc >= 18.5 && imc <= 24.9){
            setResultadoFaixa('Peso normal')
        }else if(imc >= 25 && imc <= 29.9){
            setResultadoFaixa('Sobrepeso')
        }else if(imc >= 30){
            setResultadoFaixa('Obesidade')
        }

    }
    return (
        <div className='IMC-container'>

            <h1>Calculadora de IMC</h1>

            Informe seu peso (em quilogramas):
            <br />
            <input type="number"
                value={pesoPessoa}
                onChange={(event) => { setPesoPessoa(event.target.value) }} />
            <br />
            Informe a sua altura (em metros):
            <br />
            <input type="number"
                value={alturaPessoa}
                onChange={(event) => { setAlturaPessoa(event.target.value) }} />
            <br /><br />
            <button onClick={verificarIMC}>Ver IMC</button>
            <br />
            Seu IMC é de: {resultadoIMC}
            <br />
            {resultadoFaixa}
        </div>
    )
}

export default CalculadoraIMC

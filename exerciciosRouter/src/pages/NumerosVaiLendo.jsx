// Aberto: quinta-feira, 17 out. 2024, 00:00
// Vencimento: quinta-feira, 24 out. 2024, 00:00
// 7.12 - Faça um algoritmo que:
//  leia vários números e,
//  informe quantos números entre 100 e 200 foram digitados (o 100 
// e o 200 não contam),

// Use input para entrar os números;

// um botão para mandar ler o número digitado

// um botão para mostrar os resultados

import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function NumerosVaiLendo() {
    const [inputNumero, setInputNumero] = useState('')
    const [contagem, setContagem] = useState(0)
    const [resultado, setResultado] = useState(false)

    function lerNumero() {
        if (inputNumero > 100 && inputNumero < 200) {
            setContagem(contagem + 1)
        }
    }

    return (
        <div>
            <center>
                <Navbar />
                <h1>Exercício vai lendo</h1>

                <input type="text"
                    value={inputNumero}
                    onChange={(event) => setInputNumero(event.target.value)}
                />

                <br /><br />
                <button onClick={lerNumero}>Vai lendo</button>
                <button onClick={() => setResultado(true)}>Acabeii</button>

                {resultado &&
                    <div>
                        <p>Número na faixa de 100-200: {contagem}</p>
                    </div>}
            </center>
        </div>
    )
}

export default NumerosVaiLendo
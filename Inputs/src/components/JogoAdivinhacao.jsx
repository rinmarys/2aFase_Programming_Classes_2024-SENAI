import React, { useState } from 'react'
import './JogoAdivinhacao.css'

function JogoAdivinhacao() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(Math.floor(Math.random() * 10) + 1)
    const [palpite, setPalpite] = useState('')
    const [resultado, setResultado] = useState('')

    function verificarPalpite(params) {

        const palpiteNumerico = Number(palpite)

        if (isNaN(palpiteNumerico) || palpiteNumerico < 1 || palpiteNumerico > 10) {
            setResultado('Insira um número valido')
            return
        }

        if (palpiteNumerico == numeroAleatorio) {
            setResultado('Uhullll você acertou!')
        } else {
            setResultado(`Você errou! O número aleatorio era ${numeroAleatorio}`)
        }
    }

    function reiniciar() {
        setNumeroAleatorio(Math.floor(Math.random() * 10) + 1)
        setPalpite('')
        setResultado('')
    }

    return (
        <div className='jogo-container'>
            <h1>Jogo de adivinhação</h1>

            Adivinha um número entre 1-10
            <br />
            <input type="number"
                value={palpite}
                onChange={(event) => { setPalpite(event.target.value) }}
                placeholder='digite seu palpite' />
            <br /><br />
            <button onClick={verificarPalpite}>Verificar palpite</button>
            <button onClick={reiniciar}>Reiniciar jogo</button>
            <br />
            {resultado}

        </div>
    )
}

export default JogoAdivinhacao

//Comparação de Números: Peça ao usuário para inserir dois números e determine qual deles é maior.

import React, { useState } from 'react'
import './ComparacaoNumeros.css'

function ComparacaoNumeros() {
    const [numeroUm, setNumeroUm] = useState()
    const [numeroDois, setNumeroDois] = useState()
    const [saida, setSaida] = useState()

    function verificarNumeros() {

        if (numeroUm > numeroDois) {
            setSaida(`O número ${numeroUm} é o maior`)
        } else if (numeroDois > numeroUm) {
            setSaida(`O número ${numeroDois} é o maior`)
        } else {
            setSaida('Ação invalida.')
        }

    }

    return (
        <div className='comparacaoNumeros-container'>
            <h1>Comparação de números</h1>

            Insira dois números e veja qual é maior
            <br /><br />
            Número um:
            <br />
            <input type="number"
                value={numeroUm}
                onChange={(event) => { setNumeroUm(event.target.value) }} />
            <br /><br />
            Número dois:
            <br />
            <input type="number"
                value={numeroDois}
                onChange={(event) => { setNumeroDois(event.target.value) }} />
            <br /><br />
            <button onClick={verificarNumeros}>Ver qual é maior</button>
            <br />
            {saida}
        </div>
    )
}

export default ComparacaoNumeros

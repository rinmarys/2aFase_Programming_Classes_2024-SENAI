import React from 'react'
import { useState } from 'react'
import './DiaDaSemana.css'

// Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, 
// em seguida, mostre o dia da semana correspondente (por exemplo, 1 
// = Domingo, 2 = Segunda, etc.).

function DiaDaSemana() {
    const [diasSemana, setDiasSemana] = useState()
    const [saida, setSaida] = useState()

    function descobrirDia() {

        switch (diasSemana) {
            case '1':
                setSaida('Domingo!!!!')
                break;

            case '2':
                setSaida('Segunda-feira!!!!')
                break

            case '3':
                setSaida('Terça-feira!!!!')
                break

            case '4':
                setSaida('Quarta-feira!!!!')
                break

            case '5':
                setSaida('Quinta-feira!!!!')
                break

            case '6':
                setSaida('Sexta-feira!!!!')
                break

            case '7':
                setSaida('Sabado!!!!')
                break

            default:
                setSaida('Número não valido. Tente novamente!')
                break;
        }

    }
    return (
        <div className='diaSemana-container'>
            <h1>Dias da semana</h1>
            <br />

            Digite um número de 1 ao 7 para descobrir o dia da <br />
            semana:
            <br /><br />

            <input type="number"
                value={diasSemana}
                onChange={(event) => { setDiasSemana(event.target.value) }} />

            <br /><br />
            O dia é🥁🥁🥁🥁🥁🥁: {saida}

            <br />
            <button onClick={descobrirDia}>Descobrir o dia</button>
        </div>
    )
}

export default DiaDaSemana

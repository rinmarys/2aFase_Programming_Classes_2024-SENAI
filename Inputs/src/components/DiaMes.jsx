import React, { useState } from 'react'
import './DiaMes.css'

function DiaMes() {
    const [mes, setMes] = useState('')
    const [dias, setDias] = useState(null)

    function determinarDias() {

        const lowerMes = mes.toLowerCase()

        switch (mes) {
            case 'janeiro':
                setDias('31')
                break

            case 'março':
                setDias('31')
                break

            case 'maio':
                setDias('31')
                break

            case 'julho':
                setDias('31')
                break

            case 'agosto':
                setDias('31')
                break

            case 'outubro':
                setDias('31')
                break

            case 'dezembro':
                setDias('31')
                break

            case 'fevereiro':
                setDias('29')
                break

            case 'abril':
                setDias(30)
                break

            case 'junho':
                setDias(30)
                break

            case 'setembro':
                setDias(30)
                break

            case 'novembro':
                setDias(30)
                break

            default:
                setDias(null)
                alert('Mês inválido. Por favor, insira um mês válido.')
        }

    }
    return (
        <div className='mes-container'>
            <h1>Dias em um Mês</h1>

            Insira o nome de um mês:
            <br />
            <input type="text"
                value={mes}
                onChange={(event) => { setMes(event.target.value) }} />
            <br /><br />
            <button onClick={determinarDias}>Ver quantos dias tem</button>
            <br />
            O mês que você digitou tem {dias} dias.
        </div>
    )
}

export default DiaMes

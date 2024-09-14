// Classificação de Notas: Peça ao usuário para inserir sua nota em uma escala de 0 a 100 e, em 
// seguida, atribua uma classificação (A, B, C, D ou E) com base na nota.

import React, { useState } from 'react'
import './ClassificacaoNotas.css'

function ClassificacaoNotas() {
    const [nota, setNota] = useState()
    const [saida, setSaida] = useState()

    function verificarClassificacao() {
        if (nota < 0 || nota > 100) {
            setSaida('Por favor, insira uma nota valida')
        } else if (nota >= 90) {
            setSaida('A, aeee passou de ano')
        } else if (nota >= 80) {
            setSaida('B, passou bem')
        } else if (nota >= 70) {
            setSaida('C, passou raspando')
        } else if (nota >= 60) {
            setSaida('D, boa sorte lá em casa')
        } else {
            setSaida('E 💀☠️💀☠️💀☠️')
        }
    }
    return (
        <div className='notas-container'>
            <h1>Classificação de notas</h1>

            Insira a sua nota de 0-100:
            <input type="number"
                value={nota}
                onChange={(event) => { setNota(event.target.value) }} />
            <br /><br />
            <button onClick={verificarClassificacao}>Sera que passou de ano? Veja aqui!</button>
            <br />
            Classificação: {saida}
        </div>
    )
}

export default ClassificacaoNotas

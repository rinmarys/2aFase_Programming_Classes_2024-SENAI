// Mensagem Secreta: Peça ao usuário para digitar uma senha e, se a senha for "abracadabra", exiba uma mensagem secreta.

import React, { useState } from 'react'
import './MensagemSecreta.css'

function MensagemSecreta() {
    const [senhaMagica, setSenhaMagica] = useState()
    const [saida, setSaida] = useState()

    function verificarSenha() {
        if (senhaMagica != 'abracadabra') {
            setSaida('Errou! Tente novamente.')
        } else {
            setSaida('A mensagem secreta é: MENSAGEM SECRETAAAAAAAAAA123')
        }
    }
    return (
        <div className='mensagemSecreta-container'>
            <h1>Mensagem secreta</h1>

            Tente digitar a senha correta!
            <br />
            <input type="password"
                value={senhaMagica}
                onChange={(event) => { setSenhaMagica(event.target.value) }}
                placeholder='Digite a senha' />
            <br /><br />
            <button onClick={verificarSenha}>👀</button>
            <br />
            {saida}
        </div>
    )
}

export default MensagemSecreta

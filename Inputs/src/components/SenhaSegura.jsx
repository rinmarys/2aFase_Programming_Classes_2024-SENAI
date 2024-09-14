// Senha Segura: Peça ao usuário para criar uma senha. Verifique se a senha tem pelo menos 8 caracteres.
import './SenhaSegura.css'
import React, { useState } from 'react'

function SenhaSegura() {
    const [senhaSegura, setSenhaSegura] = useState()
    const [saida, setSaida] = useState()

    function verificarSenha(params) {
        if (senhaSegura.length >= 8) {
            setSaida('Parabens, sua senha é muitoooooo segura🥳')
        } else {
            setSaida('Eu sei que você consegue fazer melhor🫥')
        }
    }
    return (
        <div className='senhaSegura-container'>
            <h1>Senha Segura</h1>

            Por favor, crie uma senha MUITOOO segura:
            <br />
            <input type="password"
                value={senhaSegura}
                onChange={(event) => { setSenhaSegura(event.target.value) }} />
            <br /><br />
            <button onClick={verificarSenha}>Verificar se é segura mesmo</button>
            <br />
            {saida}
        </div>
    )
}

export default SenhaSegura

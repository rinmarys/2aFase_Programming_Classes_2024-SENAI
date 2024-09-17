// Peça ao usuário que insira a idade de seu cachorro e, em seguida, calcule a idade
// do cachorro em anos humanos(um ano de cachorro equivale a sete anos humanos). 
// Informe se o doguinho já pode se aposentar por idade:D

import React, { useState } from 'react'
import './IdadeCachorros.css'

function IdadeCachorros() {
  const [idadeDoguinho, setIdadeDoguinho] = useState()
  const [saida, setSaida] = useState()

  function verificarIdade() {

    let  idadeDoguinhoHumana = idadeDoguinho * 7

    if (idadeDoguinhoHumana >= 65) {

      setSaida('O seu doguinho pode se aposentar!')
      
    }else{

      setSaida('Ainda falta um pouco! seu doguinho não pode se aposentar :(')

    }

  }
  return (
    <div className='idadeCachorro-container'>
      <h1>Idade de cachorrinhos</h1>

      Insira a idade do seu doguinho:
      <br />
      <input type="number"
        value={idadeDoguinho}
        onChange={(event) => { setIdadeDoguinho(event.target.value) }} />
<br /><br />
      <button onClick={verificarIdade}>Verificar idade</button>
      <br />
      {saida}
    </div>
  )
}

export default IdadeCachorros

import React, { useState } from 'react'

function IdadeCachorros() {
    const [idadeDoguinho, setIdadeDoguinho] = useState()
    const [saida, setSaida] = useState()

    function verificarIdade() {

        let 
        
    }
  return (
    <div>
      <h1>Idade de cachorrinhos</h1>

      Insira a idade do seu doguinho:
      <br />
      <input type="number"
      value={idadeDoguinho}
      onChange={(event) => {setIdadeDoguinho(event.target.value)}} />

      <button onClick={verificarIdade}>Verificar idade</button>
    </div>
  )
}

export default IdadeCachorros

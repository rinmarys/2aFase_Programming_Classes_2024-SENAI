import React, { useState } from 'react'
import './IdadeVotar.css'

function IdadeVotar() {
    const [idadePessoa, setIdadePessoa] = useState()
    const [resultado, setResultado] = useState()

    function verificarIdade() {

        if (idadePessoa >= 16) {

            setResultado('Você tem idade suficiente para votar!')
            
        }else{

            setResultado('Você ainda não pode votar.')

        }
        
    }
  return (
    <div className='idadeVotar-container'>
      <h1>Verificando votação</h1>

      Insira a sua idade e vamos ver se você esta apto para votar:
      <br />
      <input type="number"
      value={idadePessoa}
      onChange={(event) => {setIdadePessoa(event.target.value)}} />
      <br /><br />
      <button onClick={verificarIdade}>Verificar</button>
      <br />
      {resultado}
    </div>
  )
}

export default IdadeVotar

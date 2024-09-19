import React, { useState } from 'react'
import './AnoBissexto.css'

function AnoBissexto() {
  const [ano, setAno] = useState('')
  const [resultado, setResultado] = useState('')

  function verificar() {

    const anoNumerico = Number(ano)

    if (anoNumerico % 4 == 0 && anoNumerico % 100 !== 0) {
      setResultado('O ano é bissexto!')
    }else{
      setResultado('O ano não é bissexto :(')
    }
    
  }
  return (
    <div className='anoBissexto-container'>
      <h1>Verificador de ano bissexto</h1>

      Insira o ano que você quer verificar:
      <br />
      <input type="number"
        value={ano}
        onChange={(event) => { setAno(event.target.value) }} />
      <br /><br />
      <button onClick={verificar}>Verificar</button>
      <br />
      {resultado}
    </div>
  )
}

export default AnoBissexto

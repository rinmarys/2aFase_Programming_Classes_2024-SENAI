import { useState } from "react"
import './Exemplo.css'

function Exemplo() {

  const [resultado, setResultado] = useState(0)

  function aumentar(params) {
    setResultado(resultado + 1)
  }

  function diminuir(params) {
    setResultado(resultado - 1)
  }

  return (

    <center>

      <div className="Exemplo-container">

        <h2>Exemplo de cornometro</h2>

        <button onClick={diminuir}>-</button>
        {resultado}
        <button onClick={aumentar}>+</button>

      </div>
      
    </center>
  )
}

export default Exemplo
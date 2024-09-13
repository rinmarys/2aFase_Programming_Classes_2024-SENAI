import { useState } from 'react'
import './App.css'
import DiaDaSemana from './components/DiaDaSemana'
import MaiorIdade from './components/MaiorIdade'
import MenorIdade from './components/MenorIdade'

function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const [maiorIdade, setMaiorIdade] = useState(false)
  const [menorIdade, setMenorIdade] = useState(false)

  function processarIdade(params) {

    if (inputIdade >= 18) {

      setMaiorIdade(true)
      setMenorIdade(false)

    } else {

      setMenorIdade(true)
      setMaiorIdade(false)
    }

  }

  return (
    <>
      {/* Atividade 2 - Dia da semana */}

      {/* Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, 
      em seguida, mostre o dia da semana correspondente 
      (por exemplo, 1 = Domingo, 2 = Segunda, etc.). */}
      <div>
      <DiaDaSemana />
      </div>


      {/* Atividade 1 - Maior e menor de idade */}
      <div className='body-container'>
        <h1>Inputs</h1>

        Idade:
        <br />

        <input type="number" className='formularios'

          value={inputIdade}
          onChange={(event) => { setInputIdade(event.target.value) }}

        />
        <br /><br />

        <button onClick={processarIdade} >Processar idade</button>
        <br />

        {maiorIdade && <MaiorIdade />}
        {menorIdade && <MenorIdade />}
      </div>
    </>
  )
}

export default App

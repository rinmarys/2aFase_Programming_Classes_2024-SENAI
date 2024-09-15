import { useState } from 'react'
import './App.css'
import DiaDaSemana from './components/DiaDaSemana'
import MaiorIdade from './components/MaiorIdade'
import MenorIdade from './components/MenorIdade'
import ParEImpar from './components/ParEImpar'
import CalculadoraSimples from './components/CalculadoraSimples'
import SenhaSegura from './components/SenhaSegura'
import ClassificacaoNotas from './components/ClassificacaoNotas'
import ComparacaoNumeros from './components/ComparacaoNumeros'
import MensagemSecreta from './components/MensagemSecreta'
import DecisaoCompra from './components/DecisaoCompra'

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

      {/* Atividade 12 - Idade de cachorros
      Peça ao usuário que insira a idade de seu cachorro e, em seguida, calcule a idade
      do cachorro em anos humanos (um ano de cachorro equivale a sete anos humanos). 
      Informe se o doguinho já pode se aposentar por idade :D */}
      <div>
        <IdadeCachorros />
      </div>

      {/* Atividade 11 - Decisão de compra
      Decisão de Compra: Peça ao usuário para inserir o preço de um item e seu saldo.
      Em seguida, determine se eles podem comprar o item ou não. */}
      <div>
        <DecisaoCompra />
      </div>

      {/* Atividade 10 - Jogo de adivinhação
      Ativida 9 - Verificadno ano bissexto */}

      {/* Atividade 8 - Mensagem secreta
    Mensagem Secreta: Peça ao usuário para digitar uma senha e, se a senha for "abracadabra", exiba uma mensagem secreta. */}
      <div>
        <MensagemSecreta />
      </div>

      {/* Atividade 7 - Comparação de números
      Peça ao usuário para inserir dois números e determine qual deles é maior. */}
      <div>
        <ComparacaoNumeros />
      </div>

      {/* Atividade 6 - CLassificação de notas
      Classificação de Notas: Peça ao usuário para inserir sua nota em uma escala de 
      0 a 100 e, em seguida, atribua uma classificação (A, B, C, D ou E) com base na nota. */}
      <div>
        <ClassificacaoNotas />
      </div>

      {/* Atividade 5 - Senha segura
      Peça ao usuário para criar uma senha. Verifique se a senha 
      tem pelo menos 8 caracteres. */}
      <div>
        <SenhaSegura />
      </div>

      {/* Atividade 4 - Calculadora simples
      Calculadora Simples: Crie uma calculadora simples que peça ao usuário
      dois números e uma operação (adição, subtração, multiplicação ou divisão)
      e, em seguida, exiba o resultado. */}
      <div>
        <CalculadoraSimples />
      </div>

      {/* Atividade 3 - Número par e impar
      Verificando Números Pares: Peça ao usuário para 
      inserir um número e, em seguida, determine se 
      é par ou ímpar. */}
      <div>
        <ParEImpar />
      </div>

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

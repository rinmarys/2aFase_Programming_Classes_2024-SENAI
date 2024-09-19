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
import IdadeCachorros from './components/IdadeCachorros'
import IdadeVotar from './components/IdadeVotar'
import VerificandoLetras from './components/VerificandoLetras'
import CalculadoraIMC from './components/CalculadoraIMC'
import ConversorTemperatura from './components/ConversorTemperatura'
import DiaMes from './components/DiaMes'
import AnoBissexto from './components/AnoBissexto'
import JogoAdivinhacao from './components/JogoAdivinhacao'



function App() {
  const [inputIdade, setInputIdade] = useState(0)
  const [maiorIdade, setMaiorIdade] = useState(false)
  const [menorIdade, setMenorIdade] = useState(false)

  function processarIdade() {

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

      {/* Atividade 17 - Dias em um Mês
      Peça ao usuário para inserir o nome de um mês e, 
      em seguida, determine quantos dias ele tem. */}
      <DiaMes />

      {/* Atividade 16 - Conversor de Temperatura 
      Crie um conversor de temperatura que peça ao usuário para inserir 
      uma temperatura em Celsius e, em seguida, converta-a para Fahrenheit. */}
      <ConversorTemperatura />

      {/* Atividade 15 - Calculadora de IMC
      Crie uma calculadora de Índice de Massa Corporal (IMC) que peça ao 
      usuário seu peso e altura e, em seguida, calcule e exiba o IMC. 
      Informe também em que faixa o usuário se encontra. */}
      <CalculadoraIMC />

      {/* Atividade 14 - Verificando Letra Maiúscula
      Peça ao usuário para inserir uma letra e verifique se ela é maiúscula ou minúscula. */}
      <VerificandoLetras />

      {/* Atividade 13 - Verificando Votação 
      Peça ao usuário para inserir sua idade e verifique se
      ele é elegível para votar (idade mínima de 16 anos). */}
      <IdadeVotar />

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
      Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, 
      em seguida, diga se eles acertaram ou não. */}
      <JogoAdivinhacao />

      {/* Ativida 9 - Verificando ano bissexto
      Peça ao usuário para inserir um ano e determine se ele é bissexto ou não. */}
      <AnoBissexto />


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

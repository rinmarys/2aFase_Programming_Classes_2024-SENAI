import './App.css'
import Exemplo from './components/Exemplo'
import ImprimirNumero from './components/ImprimirNumero'
import LinhaCredito from './components/LinhaCredito'
import Media from './components/Media'
import NumPositivoNegativo from './components/NumPositivoNegativo.jsx'

function App() {

  return (
    <>
    <center>
    <h2>Lista de atividade 1</h2>
    </center>

        <ImprimirNumero />

        <LinhaCredito />

        <NumPositivoNegativo />

        <Media/>

        <Exemplo />
    </>
  )
}

export default App
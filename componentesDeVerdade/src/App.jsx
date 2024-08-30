import './components/Cabecalho.css'
import Cabecalho from './components/Cabecalho'
import Links from './components/Links'
import Corpo from './components/Corpo'
import './App.css'
import './Index.css'

function App() {

  return (

    <div className='body'>
        <>
          <Cabecalho/>
          <Links/>
          <Corpo/>
        </>
    </div>
  )
}

export default App

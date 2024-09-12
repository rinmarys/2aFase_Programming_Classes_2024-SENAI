import { useState } from 'react'

import './App.css'
import Home from './pages/Home'
import PaginaDois from './pages/PaginaDois'
import PaginaUm from './pages/PaginaUm'
import Render from './pages/Render'

function App() {
  const [pagina, setPagina] = useState(<Home  />)

  function mostrarHome(params) {
    setPagina(<Home />)
  }

  return (
    <>
      <nav>
        <button onClick={ mostrarHome }>Home</button>
        <button onClick={ () => {setPagina(<PaginaUm/>)} }>Pagina bonita</button>
        <button onClick={ () => {setPagina(<PaginaDois/>)} }>Contato</button>
        <button onClick={ () => {setPagina(<Render/>)} }>Render</button>
      </nav>
      {pagina}
    </>
  )
}

export default App

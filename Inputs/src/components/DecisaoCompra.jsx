import React, { useState } from 'react'
import './DecisaoCompra.css'

function DecisaoCompra() {
    const [precoProduto, setPrecoProduto] = useState()
    const [saldoUsuario, setSaldoUsuario] = useState()
    const [resultado, setResultado] = useState()

    function verificarSaldo() {

        if (precoProduto > saldoUsuario) {
            setResultado('Você não tem saldo suficiente')
        } else if (saldoUsuario >= precoProduto) {
            setResultado('Você pode comprar esse produto!')
        }
    }
    return (
        <div className='decisaoCompra-container'>
            <h1>Decisão de compra</h1>

            Oi usuario, agora você vai ver se pode comprar esse produto!
            <br /><br />
            Preço do produto:
            <input type="number"
                value={precoProduto}
                onChange={(event) => { setPrecoProduto(event.target.value) }} />
            <br />
            Saldo na sua conta:
            <input type="number"
                value={saldoUsuario}
                onChange={(event) => { setSaldoUsuario(event.target.value) }} />
            <br /><br />
            <button onClick={verificarSaldo}>Verificar saldo</button>
            <br />
            {resultado}

        </div>
    )
}

export default DecisaoCompra

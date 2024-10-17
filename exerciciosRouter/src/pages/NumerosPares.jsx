// 7.13 - Faça um algoritmo que leia dois números e mostre todos os números 
// pares contidos entre eles. 
// Exemplo: 
//  - Limite inferior: 3 
//  - Limite superior: 12 
//  - Saída: 4 6 8 10

import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function NumerosPares() {
    const [limiteSuperior, setLimiteSuperior] = useState()
    const [limiteInferior, setLimiteInferior] = useState()
    const [numerosPares, setNumerosPares] = useState('')

    
    function mostrarResultados(params) {

        // Calcula o limite inferior e superior, garantindo que sejam números
        const inferior = Math.min(Number(limiteInferior), Number(limiteSuperior));
        const superior = Math.max(Number(limiteInferior), Number(limiteSuperior));

        const pares = [] // Cria um array para armazenar os números pares

        let numero = inferior + 1 // Começa depois do primeiro

        while (numero < superior) { // Enquanto o número for menor que o limite superior, ele faz a divisão, se a divisão for igual a zero ele manda pro array
            if (numero % 2 == 0) {
                pares.push(numero) // adiciona o número par no array
            }
            numero ++ // Passa o número para ir pro proximo
        }
        setNumerosPares(pares.join(', ')) // Junta todos os pares numa string
    }

    return (
        <div>
            <center>
                <Navbar />
                <h1>Pagina que lê números</h1>

                Digite o menor número aqui:
                <input type="number"
                    value={limiteSuperior}
                    onChange={(e) => setLimiteSuperior(event.target.value)}
                />

                <br /><br />
                Digite o maior aqui:
                <input type="number"
                    value={limiteInferior}
                    onChange={(e) => setLimiteInferior(event.target.value)} />
                <br /><br />

                <button onClick={mostrarResultados}>Mostrar resultados</button>

        
                    <div>
                        <p>Os números pares são: {numerosPares}</p>
                 </div>
            </center>
        </div>
    )
}

export default NumerosPares

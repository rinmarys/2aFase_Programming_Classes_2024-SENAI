// 5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
// crédito para os funcionários. O valor da prestação não pode ultrapassar 
// 30% do salário. Faça um programa que receba o salário, o valor do 
// empréstimo e o número de prestações e informe se o empréstimo pode ser 
// concedido. Nenhum dos valores informados pode ser zero ou negativo.

import React from 'react'
import { useState } from 'react'
import './LinhaCredito.css'

function LinhaCredito() {

    const [resultado, setResultado] = useState()

    function descobrir(params) {

        let salario = Number(prompt('Digite o seu salario:'))
        let emprestimo = Number(prompt('Digite o valor do empréstimo:'))
        let prestacoes = Number(prompt('Digite o número de pretações:'))

        if (salario <= 0 || emprestimo <= 0 || prestacoes <= 0) {

            alert('As informações não foram validas. Tente novamente!!')

        } else {

            let valorPrestacao = emprestimo / prestacoes
            let porcentagemSalario = (30 * salario) / 100

            if (valorPrestacao < porcentagemSalario) {

                setResultado('Empréstimo pode ser concedido')

            } else {

                setResultado('Empréstimo não pode ser concedido')

            }
        }

    }

    return (

        <center>

            <div className='LinhaCredito-container'>
                <h2>Linha de credito para funcionarios</h2>
                <h5>Esse botão irá informar se o empréstimo pode ser concedido</h5>
                <button onClick={descobrir}>Descobrir</button>
                <br />
                {resultado}
            </div>

        </center>
    )
}

export default LinhaCredito

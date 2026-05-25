"use strict"

//importando arquivo do CRUD
import { getContatos, getContato, postContato, putContato, deleteContato } from "./javaScript/contatos.js"

//declarando botão salvar
const botaoSalvar = document.getElementById("botao-salvar")

//função para pegar os dados e mandar para a outra função
const coletarDados = async function(){
    //variável que vai guardadr os dados para o cadastro
    let contato = {}
    //montando o objeto com os dados que o usuário digou 
    contato.nome = document.getElementById("inserir-nome").value
    contato.celular = document.getElementById("inserir-celular").value
    contato.foto = document.getElementById("inserir-url").value
    contato.email = document.getElementById("inserir-email").value
    contato.endereco = document.getElementById("inserir-endereco").value
    contato.cidade = document.getElementById("inserir-cidade").value

    //validando os dados recebidos
    //let validacao = await validarDados(contato)

    //validando resposta da função
    // if(validacao){

    // }else{
    //     return false
    // }

    //mandando para a função de post
    let result = await postContato(contato)
    console.log(result)
}

//função para validadar os dados recebidos
const validarDados = function(contato){

    if(contato.nome == null){

    }else{
        return true
    }

}

//função para montar a tabela com dados que vem do banco 
const montarTabela = async function(){
    //pedindo os contatos existentes para realizar a montagem
    let dadosContatos = await getContatos()
    console.log(dadosContatos)

    //importando tabela 
    let tabelaResultados = document.getElementById("tabela-contatos")


    //estrutura de repetição para montar a tebala
    dadosContatos.forEach(function(contato){

        //criando linha da tabela
        const linhaTabela = document.createElement("tr")

        //criando células da tabela
        const tdId = document.createElement("td")
        tdId.textContent = contato.id

        const tdNome = document.createElement("td")
        tdNome.textContent = contato.nome

        const tdCelular = document.createElement("td")
        tdCelular.textContent = contato.celular

        const tdEmail = document.createElement("td")
        tdEmail.textContent = contato.email

        const tdEndereco = document.createElement("td")
        tdEndereco.textContent = contato.endereco

        const tdCidade = document.createElement("td")
        tdCidade.textContent = contato.cidade

        //deixando o link da foto menor para facilitar a vizualização
        const tdFoto = document.createElement("td")
        tdFoto.textContent = contato.foto

        //criando célula para guardar os botões
        const tdAcao = document.createElement("td")

        //criando os botões e colocando nome correto (deletar / editar)
        const botaoEditar = document.createElement("button")
        botaoEditar.textContent = "EDITAR"
        const botaoDeletar = document.createElement("button")
        botaoDeletar.textContent = "DELETAR"

        //colocando os botões nas células corretas
        tdAcao.appendChild(botaoEditar)
        tdAcao.appendChild(botaoDeletar)

        //adicionando as células na linha que eu criei 
        linhaTabela.replaceChildren(tdId, tdNome, tdCelular, tdEmail, tdEndereco, tdCidade, tdFoto,tdAcao)
        tabelaResultados.appendChild(linhaTabela)
    })

}


botaoSalvar.addEventListener("click", coletarDados)
montarTabela()
// const fs = require('fs');
// const path = require('path');

// const caminho = path.join(__dirname, 'dados.txt');



// function exibirConteudo(_, conteudo) {
//     return conteudo.toString()
// }

// function newPromise(path) {
//     return new Promise(resolve => {
//         const result = fs.readFileSync(caminho);
//         resolve(result.toString())
//     })
// }

// newPromise(caminho).then(console.log)

// const promise = new Promise(function (resolve) {
//     return resolve(fs.readFile(caminho, (_, conteudo) => conteudo.toString()))
// })
var nome = "nah";
var sobrenome = "lisboa"
var profissao = "programadora"
var cartaoDeVisita = nome + " " + sobrenome + " " + profissao;
console.log(nome + sobrenome + profissao);
// console.log('Inicio...')
// fs.readFile(caminho, exibirConteudo)
// fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
// console.log('Fim...')


// console.log('Inicio Sync...')
// const conteudo = fs.readFileSync(caminho)
// console.log(conteudo.toString())
// console.log('Fim Sync...')


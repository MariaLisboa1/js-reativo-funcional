const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
]

fn.composicao(
    fn.lerDiretorio(caminho),
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir('-->'),
    fn.removerElementosSeApenasNumero,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumero,
    fn.agruparElementos,
    fn.ordernarPorAtribNumerico('qtde', 'desc'),
    console.log
);

// fn.lerDiretorio(caminho)
//     .then(fn.elementosTerminadosCom('.srt'))
//     .then(fn.lerArquivos)
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor('\n'))
//     .then(fn.removerElementosSeVazio)
//     .then(fn.removerElementosSeIncluir('-->'))
//     .then(fn.removerElementosSeApenasNumero)
//     .then(fn.removerSimbolos(simbolos))
//     .then(fn.mesclarElementos)
//     .then(fn.separarTextoPor(' '))
//     .then(fn.removerElementosSeVazio)
//     .then(fn.removerElementosSeApenasNumero)
//     .then(fn.agruparElementos)
//     .then(fn.ordernarPorAtribNumerico('qtde', 'desc'))
//     .then(console.log)
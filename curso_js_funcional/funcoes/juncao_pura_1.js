// Uma funçaão pura é uma funcao em que o valor
// de retorno é determinado APENAS por seus valores de entrada,
// sem efetiso colaterais observáveis

const PI = 3.14;

function areaCir(raio) {
    return raio * raio * PI;
}

console.log(areaCir(10));
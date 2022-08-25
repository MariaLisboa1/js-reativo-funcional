function somar(n1) {
    return function(n2) {
        return function(n3) {
            return n1 + n2 + n3
        }
    }
}

console.log(somar(1)(1)(1));

function calcular(n1) {
    return function(n2) {
        return function(fn) {
            if (typeof fn === 'function') {
                return fn(n1, n2)
            }
            return '3 Param is not a funcion';
        }
    }
}

function sum(n1, n2) {
    return n1 + n2;
}

console.log(calcular(2)(2)(2));
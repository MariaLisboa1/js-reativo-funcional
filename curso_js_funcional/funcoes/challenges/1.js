const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
];

//1. fragil: true

const allFragile = carrinho.filter(c => c.fragil);
// console.log(allFragile);

//2. qtde * preco -> total

const getTotal = item => item.qtde * item.preco;
const sum = (acc, el) => acc + el;
// const media = (arr, total) => total / arr.length;

const total = carrinho.map(getTotal);
// console.log(total);

//3. media totais
// soma de todos e dpois divide pela quantidade
// carrinho.reduce(acc, el => )
const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, currentValue) => {
        const novoQtd = acc.qtde + 1;
        const novoTotal = acc.total + currentValue;

        return {
            qtde: novoQtd,
            total: novoTotal,
            media: novoTotal / novoQtd
        };
    }, { qtde: 0, total: 0, media: 0});

console.log(media);
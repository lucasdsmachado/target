function calculaSoma() {
  let indice = 13, soma = 0, k = 0;
  while (k < indice) {
    k += 1;
    soma += k;
  }
  return soma;
}

function fibonacci(num) {
  let fib = [0, 1];
  while (fib[fib.length - 1] < num) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib[fib.length - 1] === num ?
    `O número ${num} pertence a sequência Fibonacci` :
    `O número ${num} não pertence a sequência Fibonacci`;
}

function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function faturamento() {
  const fs = require('fs');
  const data = fs.readFileSync('./dados.json', 'utf-8');
  const json = JSON.parse(data);

  const diasUteis = json.filter(dia => dia.valor > 0);
  const mediaMensal = diasUteis.reduce((acc, dia) => dia.valor + acc, 0) / diasUteis.length;
  const menorValor = Math.min(...diasUteis.map(dia => dia.valor));
  const maiorValor = Math.max(...diasUteis.map(dia => dia.valor));
  const diasAcimaDaMedia = diasUteis.reduce((acc, dia) => dia.valor > mediaMensal ? acc + 1 : acc, 0);

  console.log(`Menor valor de faturamento ocorrido em um dia do mês: ${menorValor}`);
  console.log(`Maior valor de faturamento ocorrido em um dia do mês: ${maiorValor}`);
  console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

function faturamentoDosEstados () {
  const faturamentoPorEstado = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };

  const valorTotalMensal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

  const percentualPorEstado = {};
  for (const [estado, valor] of Object.entries(faturamentoPorEstado)) {
    percentualPorEstado[estado] = (valor / valorTotalMensal) * 100;
  }
  return percentualPorEstado;
}

console.log(calculaSoma());
console.log(fibonacci(34));
console.log(fibonacci(33));
console.log(reverse("): tegraT ad oiráigatse ovon siam o é nairB"));
faturamento();
console.table(faturamentoDosEstados());
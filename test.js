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

console.log(calculaSoma());
console.log(fibonacci(34));
console.log(fibonacci(33));
console.log(reverse("): tegraT ad oiráigatse ovon siam o é nairB"));
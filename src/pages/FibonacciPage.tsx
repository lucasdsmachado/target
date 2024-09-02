import React, { useState } from 'react';
import '../styles/FibonacciPage.css';

const isFibonacci = (num: number): boolean => {
  if (num < 0) return false;

  let a = 0;
  let b = 1;

  while (b < num) {
    [a, b] = [b, a + b];
  }

  return b === num;
};

const FibonacciPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<number | ''>('');
  const [result, setResult] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value === '' ? '' : parseInt(value, 10));
  };

  const checkFibonacci = () => {
    if (inputValue === '' || isNaN(inputValue)) {
      setResult('Por favor, insira um número válido.');
    } else {
      const resultMessage = isFibonacci(inputValue)
        ? `${inputValue} pertence à sequência de Fibonacci.`
        : `${inputValue} não pertence à sequência de Fibonacci.`;
      setResult(resultMessage);
    }
  };

  return (
    <div className="fibonacci-page">
      <h1>Verificador de Sequência de Fibonacci</h1>
      <div className="input-group">
        <label htmlFor="fibonacci-input">Insira um número:</label>
        <input
          id="fibonacci-input"
          type="number"
          value={inputValue === '' ? '' : inputValue}
          onChange={handleChange}
        />
        <button onClick={checkFibonacci}>Verificar</button>
      </div>
      {result && <p className="result-message">{result}</p>}
    </div>
  );
};

export default FibonacciPage;
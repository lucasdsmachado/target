// src/pages/InversaoPage.tsx
import React, { useState } from 'react';
import '../styles/InversaoPage.css';

const reverseString = (str: string): string => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

const InversaoPage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [reversedString, setReversedString] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const reverse = () => {
    const reversed = reverseString(inputValue);
    setReversedString(reversed);
  };

  return (
    <div className="inversao-page">
      <h1>Inversão de Caracteres em uma String</h1>
      <div className="input-group">
        <label htmlFor="string-input">Insira uma string:</label>
        <input
          id="string-input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={reverse}>Inverter</button>
      </div>
      {reversedString && <p className="result-message">String invertida: {reversedString}</p>}
    </div>
  );
};

export default InversaoPage;
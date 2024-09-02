// src/pages/PagamentoPage.tsx
import React from 'react';
import '../styles/PagamentoPage.css';

// Definindo o tipo para o objeto estados
type Estados = {
  [estado: string]: number;
};

const estados: Estados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalFaturamento = Object.values(estados).reduce((acc, valor) => acc + valor, 0);

const calcularPercentuais = () => {
  return Object.keys(estados).map(estado => ({
    estado,
    percentual: ((estados[estado] / totalFaturamento) * 100).toFixed(2)
  }));
};

const PagamentoPage: React.FC = () => {
  const percentuais = calcularPercentuais();

  return (
    <div className="pagamento-page">
      <h1>Percentual de Representação por Estado</h1>
      <table>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Percentual (%)</th>
          </tr>
        </thead>
        <tbody>
          {percentuais.map(({ estado, percentual }) => (
            <tr key={estado}>
              <td>{estado}</td>
              <td>{percentual}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PagamentoPage;
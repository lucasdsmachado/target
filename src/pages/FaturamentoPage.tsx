import React, { useEffect, useState } from 'react';
import dados from '../data/dados.json';
import '../styles/FaturamentoPage.css';

interface FaturamentoDia {
  dia: number;
  valor: number;
}

const FaturamentoPage: React.FC = () => {
  const [menorFaturamento, setMenorFaturamento] = useState<number | null>(null);
  const [maiorFaturamento, setMaiorFaturamento] = useState<number | null>(null);
  const [diasAcimaDaMedia, setDiasAcimaDaMedia] = useState<number>(0);

  useEffect(() => {
    calcularEstatisticas(dados);
  }, []);

  const calcularEstatisticas = (dados: FaturamentoDia[]) => {
    const faturamentos = dados
      .filter(dado => dado.valor > 0)
      .map(dado => dado.valor);

    if (faturamentos.length === 0) {
      setMenorFaturamento(null);
      setMaiorFaturamento(null);
      setDiasAcimaDaMedia(0);
      return;
    }

    const totalFaturamento = faturamentos.reduce((acc, valor) => acc + valor, 0);
    const mediaMensal = totalFaturamento / faturamentos.length;

    setMenorFaturamento(Math.min(...faturamentos));
    setMaiorFaturamento(Math.max(...faturamentos));
    setDiasAcimaDaMedia(dados.filter(dado => dado.valor > mediaMensal).length);
  };

  const formatarDinheiro = (valor: number | null): string => {
    return valor !== null
      ? valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      : 'Carregando...';
  };

  return (
    <div className="faturamento-page">
      <h1>Análise de Faturamento Diário</h1>
      <div className="estatisticas">
        <p>Menor valor de faturamento: {formatarDinheiro(menorFaturamento)}</p>
        <p>Maior valor de faturamento: {formatarDinheiro(maiorFaturamento)}</p>
        <p>Número de dias com faturamento acima da média mensal: {diasAcimaDaMedia !== null ? diasAcimaDaMedia : 'Carregando...'}</p>
      </div>
    </div>
  );
};

export default FaturamentoPage;

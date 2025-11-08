import { useState, useMemo } from 'react';

export default function useCalendario(dataInicial = new Date()) {
  const [dataSelecionada, setDataSelecionada] = useState(dataInicial);
  const [mesAtual, setMesAtual] = useState(new Date(dataInicial.getFullYear(), dataInicial.getMonth(), 1));

  const proximoMes = () => {
    setMesAtual((prev) => {
      const novoMes = new Date(prev);
      novoMes.setMonth(novoMes.getMonth() + 1);
      return novoMes;
    });
  };

  const mesAnterior = () => {
    setMesAtual((prev) => {
      const novoMes = new Date(prev);
      novoMes.setMonth(novoMes.getMonth() - 1);
      return novoMes;
    });
  };

  const selecionarData = (data) => {
    setDataSelecionada(data);
  };

  const diasDoMes = useMemo(() => {
    const ano = mesAtual.getFullYear();
    const mes = mesAtual.getMonth();
    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const diasNoMes = ultimoDia.getDate();
    const diaSemanaInicio = primeiroDia.getDay();

    const dias = [];
    
    for (let i = 0; i < diaSemanaInicio; i++) {
      dias.push(null);
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
      const data = new Date(ano, mes, dia);
      dias.push(data);
    }

    return dias;
  }, [mesAtual]);

  const hoje = new Date();
  const hojeFormatado = hoje.toISOString().split('T')[0];

  const formatarData = (data) => {
    if (!data) return '';
    return data.toISOString().split('T')[0];
  };

  const isDataPassada = (data) => {
    if (!data) return false;
    const dataFormatada = formatarData(data);
    return dataFormatada < hojeFormatado;
  };

  const isDataHoje = (data) => {
    if (!data) return false;
    return formatarData(data) === hojeFormatado;
  };

  return {
    dataSelecionada,
    mesAtual,
    proximoMes,
    mesAnterior,
    selecionarData,
    diasDoMes,
    formatarData,
    isDataPassada,
    isDataHoje,
    hojeFormatado,
  };
}


import { useState, useEffect, useCallback } from 'react';
import useStorage from './useStorage';
import useApi from './useApi';

export default function useServicos() {
  const [servicos, setServicos, , loadingStorage] = useStorage('servicos', []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const servicosPadrao = [
    { id: '1', nome: 'Corte Masculino', preco: 30, duracao: 30 },
    { id: '2', nome: 'Corte Feminino', preco: 50, duracao: 60 },
    { id: '3', nome: 'Barba', preco: 20, duracao: 20 },
    { id: '4', nome: 'Corte + Barba', preco: 45, duracao: 50 },
    { id: '5', nome: 'Penteado', preco: 40, duracao: 45 },
  ];

  useEffect(() => {
    if (!loadingStorage && servicos.length === 0) {
      setServicos(servicosPadrao);
    }
  }, [loadingStorage, servicos.length, setServicos]);

  const buscarServicos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (servicos.length === 0) {
        setServicos(servicosPadrao);
        return servicosPadrao;
      }

      return servicos;
    } catch (err) {
      const errorMessage = err?.message || 'Erro ao buscar serviços';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [servicos, setServicos]);

  const obterServico = useCallback(
    (id) => {
      return servicos.find((servico) => servico.id === id);
    },
    [servicos]
  );

  return {
    servicos,
    loading: loading || loadingStorage,
    error,
    buscarServicos,
    obterServico,
  };
}


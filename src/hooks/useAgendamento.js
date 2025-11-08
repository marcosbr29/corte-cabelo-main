import { useState, useCallback } from 'react';
import useStorage from './useStorage';
import useApi from './useApi';

export default function useAgendamento() {
  const [agendamentos, setAgendamentos, , loadingStorage] = useStorage('agendamentos', []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const criarAgendamento = useCallback(
    async (dadosAgendamento) => {
      setLoading(true);
      setError(null);
      try {
        if (!dadosAgendamento.data || !dadosAgendamento.horario) {
          throw new Error('Data e horário são obrigatórios');
        }

        await new Promise((resolve) => setTimeout(resolve, 500));

        const novoAgendamento = {
          id: Date.now().toString(),
          ...dadosAgendamento,
          status: 'confirmado',
          criadoEm: new Date().toISOString(),
        };

        const agendamentosAtualizados = [...agendamentos, novoAgendamento];
        setAgendamentos(agendamentosAtualizados);

        return novoAgendamento;
      } catch (err) {
        const errorMessage = err?.message || 'Erro ao criar agendamento';
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [agendamentos, setAgendamentos]
  );

  const cancelarAgendamento = useCallback(
    async (id) => {
      setLoading(true);
      setError(null);
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));

        const agendamentosAtualizados = agendamentos.map((ag) =>
          ag.id === id ? { ...ag, status: 'cancelado' } : ag
        );
        setAgendamentos(agendamentosAtualizados);

        return true;
      } catch (err) {
        const errorMessage = err?.message || 'Erro ao cancelar agendamento';
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [agendamentos, setAgendamentos]
  );

  const atualizarAgendamento = useCallback(
    async (id, dadosAtualizados) => {
      setLoading(true);
      setError(null);
      try {
        await new Promise((resolve) => setTimeout(resolve, 300));

        const agendamentosAtualizados = agendamentos.map((ag) =>
          ag.id === id ? { ...ag, ...dadosAtualizados, atualizadoEm: new Date().toISOString() } : ag
        );
        setAgendamentos(agendamentosAtualizados);

        return agendamentosAtualizados.find((ag) => ag.id === id);
      } catch (err) {
        const errorMessage = err?.message || 'Erro ao atualizar agendamento';
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [agendamentos, setAgendamentos]
  );

  const obterAgendamento = useCallback(
    (id) => {
      return agendamentos.find((ag) => ag.id === id);
    },
    [agendamentos]
  );

  const obterAgendamentosPorData = useCallback(
    (data) => {
      return agendamentos.filter((ag) => ag.data === data && ag.status !== 'cancelado');
    },
    [agendamentos]
  );

  return {
    agendamentos,
    loading: loading || loadingStorage,
    error,
    criarAgendamento,
    cancelarAgendamento,
    atualizarAgendamento,
    obterAgendamento,
    obterAgendamentosPorData,
  };
}


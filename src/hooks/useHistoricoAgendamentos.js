import { useMemo } from 'react';
import useAgendamento from './useAgendamento';


export default function useHistoricoAgendamentos() {
  const { agendamentos } = useAgendamento();
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const historico = useMemo(() => {
    const passados = [];
    const futuros = [];
    const cancelados = [];

    agendamentos.forEach((agendamento) => {
      const dataAgendamento = new Date(agendamento.data);
      dataAgendamento.setHours(0, 0, 0, 0);

      if (agendamento.status === 'cancelado') {
        cancelados.push(agendamento);
      } else if (dataAgendamento < hoje) {
        passados.push(agendamento);
      } else if (dataAgendamento >= hoje) {
        futuros.push(agendamento);
      }
    });

    const ordenarPorData = (a, b) => {
      const dataA = new Date(`${a.data}T${a.horario}`);
      const dataB = new Date(`${b.data}T${b.horario}`);
      return dataB - dataA; 
    };

    return {
      passados: passados.sort(ordenarPorData),
      futuros: futuros.sort((a, b) => {
        const dataA = new Date(`${a.data}T${a.horario}`);
        const dataB = new Date(`${b.data}T${b.horario}`);
        return dataA - dataB; 
      }),
      cancelados: cancelados.sort(ordenarPorData),
    };
  }, [agendamentos]);

  return {
    historico,
    agendamentosPassados: historico.passados,
    agendamentosFuturos: historico.futuros,
    agendamentosCancelados: historico.cancelados,
  };
}


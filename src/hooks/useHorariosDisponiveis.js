import { useMemo } from 'react';
import useAgendamento from './useAgendamento';

export default function useHorariosDisponiveis(data, duracaoServico = 30) {
  const { obterAgendamentosPorData } = useAgendamento();

  const horarioInicio = 9; 
  const horarioFim = 18; 
  const intervalo = 30; 

  const horariosDisponiveis = useMemo(() => {
    const horarios = [];
    const agendamentosDoDia = obterAgendamentosPorData(data);


    for (let hora = horarioInicio; hora < horarioFim; hora++) {
      for (let minuto = 0; minuto < 60; minuto += intervalo) {
        const horario = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}`;
        horarios.push(horario);
      }
    }


    const horariosOcupados = agendamentosDoDia.map((ag) => ag.horario);

    const horariosIndisponiveis = new Set();
    agendamentosDoDia.forEach((agendamento) => {
      const [hora, minuto] = agendamento.horario.split(':').map(Number);
      const duracao = agendamento.duracao || duracaoServico;
      const slotsNecessarios = Math.ceil(duracao / intervalo);

      for (let i = 0; i < slotsNecessarios; i++) {
        const minutosTotais = hora * 60 + minuto + i * intervalo;
        const novaHora = Math.floor(minutosTotais / 60);
        const novoMinuto = minutosTotais % 60;
        const horarioIndisponivel = `${novaHora.toString().padStart(2, '0')}:${novoMinuto.toString().padStart(2, '0')}`;
        horariosIndisponiveis.add(horarioIndisponivel);
      }
    });

    const disponiveis = horarios.filter((horario) => !horariosIndisponiveis.has(horario));

    return {
      todos: horarios,
      disponiveis,
      ocupados: Array.from(horariosIndisponiveis),
    };
  }, [data, obterAgendamentosPorData, duracaoServico]);

  return horariosDisponiveis;
}


import { useState, useCallback } from 'react';
import useStorage from './useStorage';
import useAuth from './useAuth';

export default function usePerfil() {
  const { user } = useAuth();
  const [perfil, setPerfil, , loadingStorage] = useStorage('perfil', null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const carregarPerfil = useCallback(async () => {
    if (!user) {
      setError('Usuário não autenticado');
      return null;
    }

    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));


      if (!perfil) {
        const perfilBasico = {
          id: user.id,
          email: user.email,
          nome: user.nome || '',
          telefone: '',
          endereco: '',
          dataNascimento: '',
          preferencias: {
            notificacoes: true,
            lembretes: true,
          },
        };
        setPerfil(perfilBasico);
        return perfilBasico;
      }

      return perfil;
    } catch (err) {
      const errorMessage = err?.message || 'Erro ao carregar perfil';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user, perfil, setPerfil]);

  const atualizarPerfil = useCallback(
    async (dadosAtualizados) => {
      if (!user) {
        throw new Error('Usuário não autenticado');
      }

      setLoading(true);
      setError(null);
      try {

        await new Promise((resolve) => setTimeout(resolve, 500));

        const perfilAtualizado = {
          ...perfil,
          ...dadosAtualizados,
          atualizadoEm: new Date().toISOString(),
        };

        setPerfil(perfilAtualizado);
        return perfilAtualizado;
      } catch (err) {
        const errorMessage = err?.message || 'Erro ao atualizar perfil';
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [user, perfil, setPerfil]
  );

  return {
    perfil,
    loading: loading || loadingStorage,
    error,
    atualizarPerfil,
    carregarPerfil,
  };
}


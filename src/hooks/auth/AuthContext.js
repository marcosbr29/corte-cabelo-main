import React, { createContext, useContext, useState, useEffect } from 'react';
import useStorage from '../useStorage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser, removeUser, loadingStorage] = useStorage('user', null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {

  }, []);

  const login = async (email, senha) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const userData = {
        email,
        id: Date.now().toString(),
        nome: email.split('@')[0], 
      };
      
      setUser(userData);
      return userData;
    } catch (err) {
      const errorMessage = err?.message || 'Erro ao fazer login';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await removeUser();
      setError(null);
    } catch (err) {
      setError('Erro ao fazer logout');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = !!user;

  const value = {
    user,
    isAuthenticated,
    loading: loading || loadingStorage,
    error,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext deve ser usado dentro de AuthProvider');
  }
  return context;
}


import React, { createContext, useContext, useEffect, useState } from "react";
import reactLogo from './react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

// Criando o contexto
const TemaContext = createContext();

function TemaProvider({ children }) {
  // lê o tema do localStorage ou usa 'claro' como padrão
  const [tema, setTema] = useState(() => {
    try {
      const saved = localStorage.getItem('app-tema');
      return saved === 'escuro' || saved === 'claro' ? saved : 'claro';
    } catch (e) {
      return 'claro';
    }
  });

  // atualiza localStorage e classes do body sempre que tema muda
  useEffect(() => {
    try {
      localStorage.setItem('app-tema', tema);
    } catch (e) {
      // ignore
    }
  }, [tema]);

  const alternarTema = () => setTema((t) => (t === 'claro' ? 'escuro' : 'claro'));

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
}

function Botao() {
  const { tema, alternarTema } = useContext(TemaContext);
  return (
    <button onClick={alternarTema} aria-label="Alternar tema">
      {tema === 'claro' ? '🌞 Claro' : '🌙 Escuro'}
    </button>
  );
}
export { TemaContext, TemaProvider, Botao };

// Conteúdo da aplicação que consome o TemaContext
export function Content() {
  const { tema } = useContext(TemaContext);

  return (
    <div className={`App`}>
      <h1>Exemplo useContext</h1>

      <div className="split-container">
        <div className="split-left">
          <div className="logo-stack">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div className="left-center">
            <Botao />
          </div>
        </div>

        <div className="split-right">
          <div className={`theme-card ${tema}`}>
            <div className="theme-info">
              <h3>🔹 useContext</h3>
              <p><strong>O que faz:</strong> compartilha valores entre componentes sem precisar passar props manualmente por cada nível.</p>
              <p><strong>Quando usar:</strong> quando vários componentes acessam o mesmo dado (ex.: tema, autenticação, idioma).</p>
              <p><strong>Diferença:</strong> <code>useState</code> gerencia estado local; <code>useContext</code> compartilha dados globais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente que reúne o provider e a UI (tudo concentrado aqui)
export default function ThemeApp() {
  return (
    <TemaProvider>
      <Content />
    </TemaProvider>
  );
}
import React, { useState, useCallback, memo } from "react";
import reactLogo from './react.svg';
import viteLogo from '/vite.svg';
import '../App.css';

const Tarefa = memo(function Tarefa({ texto }) {
  return <li>{texto}</li>;
});

function Content() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  const adicionarTarefa = useCallback(() => {
    if (input.trim() === "") return;
    setTarefas((prev) => [...prev, input]);
    setInput("");
  }, [input]);

  return (
    <div className="App">
      <h1>Exemplo useCallback</h1>
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
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite uma tarefa"
              className="input"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
          </div>
        </div>
        <div className="split-right">
          <div className="theme-card claro">
            <div className="theme-info">
              <h3>🔹 useCallback</h3>
              <p><strong>O que faz:</strong> memoriza funções para evitar recriação desnecessária em cada renderização.</p>
              <p><strong>Quando usar:</strong> ao passar funções para componentes filhos otimizados com <code>React.memo</code>.</p>
              <p><strong>Diferença:</strong> <code>useCallback</code> memoriza funções; <code>useContext</code> compartilha dados globais.</p>
              <ul>
                {tarefas.map((t, i) => <Tarefa key={i} texto={t} />)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UseCallbackApp() {
  return <Content />;
}

import React, { useState, useCallback, memo } from "react";
import "../App.css";

// 🔹 Componente Filho
// Só re-renderiza quando as props mudam
const Tarefa = memo(function Tarefa({ texto }) {
  console.log("Renderizou:", texto);
  return <li>{texto}</li>;
});

export default function Exemplo2() {
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
          <div className="left-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite uma tarefa"
              className="input"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
              {tarefas.map((t, index) => (
                <Tarefa key={index} texto={t} />
              ))}
            </ul>
          </div>
        </div>
        <div className="split-right">
          <div className="theme-card claro">
            <div className="theme-info">
              <h3>🔹 useCallback</h3>
              <p><strong>O que faz:</strong> memoriza funções para evitar recriação desnecessária em cada renderização.</p>
              <p><strong>Quando usar:</strong> ao passar funções para componentes filhos otimizados com <code>React.memo</code>.</p>
              <p><strong>Diferença:</strong> <code>useCallback</code> memoriza funções; <code>useContext</code> compartilha dados globais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Exemplo2 };
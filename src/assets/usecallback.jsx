import React, { useState, useCallback, memo } from "react";
import "./App.css";

// 🔹 Componente Filho
// Só re-renderiza quando as props mudam
const Tarefa = memo(function Tarefa({ texto }) {
  console.log("Renderizou:", texto);
  return <li>{texto}</li>;
});

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  // 🔹 Função memorizada com useCallback
  const adicionarTarefa = useCallback(() => {
    if (input.trim() === "") return;
    setTarefas((prev) => [...prev, input]);
    setInput("");
  }, [input]); // só recria se "input" mudar

  return (
    <div className="container">
      <h1>Exemplo Prático com useCallback</h1>

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
  );
}



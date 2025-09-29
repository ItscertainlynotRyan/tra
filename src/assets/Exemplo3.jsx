import React, { useReducer } from "react";
import "../App.css";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return { ...state, count: 0 };
    case "setStep":
      return { ...state, step: action.payload };
    default:
      throw new Error("Ação desconhecida");
  }
}

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Exemplo useReducer</h1>

      <div className="split-container">
        {/* Coluna esquerda: contador */}
        <div className="split-left">
          <p>Contagem: {state.count}</p>
          <div className="button-group">
            <button onClick={() => dispatch({ type: "increment" })}>Incrementar</button>
            <button onClick={() => dispatch({ type: "decrement" })}>Decrementar</button>
            <button onClick={() => dispatch({ type: "reset" })}>Resetar</button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <label>
              Passo:
              <input
                type="number"
                value={state.step}
                onChange={(e) =>
                  dispatch({ type: "setStep", payload: Number(e.target.value) })
                }
                style={{ marginLeft: "10px", width: "60px" }}
              />
            </label>
          </div>
        </div>

        {/* Coluna direita: explicação */}
        <div className="split-right">
          <div className="theme-card claro">
            <div className="theme-info">
              <h3>🔹 useReducer</h3>
              <p><strong>O que faz:</strong> gerencia estados complexos ou múltiplos valores de forma centralizada.</p>
              <p><strong>Quando usar:</strong> quando você precisa de lógica de atualização mais complexa ou vários estados relacionados.</p>
              <p><strong>Diferença:</strong> <code>useState</code> é bom para estados simples; <code>useReducer</code> centraliza e organiza estados complexos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// src/App.jsx
import React from "react";
import "./App.css";

// Exemplo 1: useContext
import ThemeApp from "./assets/Exemplo1.jsx";

// Exemplo 2: useCallback
import { Exemplo2 } from "./assets/exemplo2.jsx";

// Exemplo 3: useReducer
import CounterReducer from "./assets/Exemplo3.jsx";

function App() {
  return (
    <div className="app-container">
      <h1>React Hooks Examples</h1>

      {/* Exemplo 1 */}
      <ThemeApp />
      <hr />

      {/* Exemplo 2 */}
      <Exemplo2 />
      <hr />

      {/* Exemplo 3 */}
      <CounterReducer />
    </div>
  );
}

export default App;

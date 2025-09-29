import React, { useReducer } from 'react';
import './App.css';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Ação desconhecida');
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h1>Contador com useReducer</h1>
      <p className="description">
        O <code>useReducer</code> gerencia estados complexos com uma função reducer,
        ideal para múltiplas ações, como incrementar, decrementar e resetar. Resolve
        o problema de lógica de estado espalhada, oferecendo uma abordagem centralizada
        semelhante ao Redux.
      </p>
      <p>Contagem: {state.count}</p>
      <div className="button-group">
        <button className="primary" onClick={() => dispatch({ type: 'increment' })}>
          Incrementar
        </button>
        <button className="secondary" onClick={() => dispatch({ type: 'decrement' })}>
          Decrementar
        </button>
        <button className="tertiary" onClick={() => dispatch({ type: 'reset' })}>
          Resetar
        </button>
      </div>
    </div>
  );
}

export default CounterReducer;
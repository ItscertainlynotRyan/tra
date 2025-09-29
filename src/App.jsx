import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TemaProvider, Botao, Content } from './assets/context.jsx'
import Exemplo1 from './assets/context.jsx'
import Exemplo2 from './assets/exemplo2.jsx'
import CounterReducer from './assets/Exemplo3.jsx'

function App() {
  return (
    <>
      <Exemplo1 />
      <hr />
      <Exemplo2 />
      <hr />
      <CounterReducer />
    </>
  );
}

export default App

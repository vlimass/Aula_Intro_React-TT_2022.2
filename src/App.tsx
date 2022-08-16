import { Counter } from "./components/Counter";
import { Post } from "./components/Post";

import './style.css';

function App() {
  const name = 'Rita Augusta';

  return (
    <div className="principal">
      <h1>Hello, {name}!</h1>

      <div className="posts">
        <Post text="Bom dia!"/>
        <Post text="Boa noite!"/>
        <Post text="Feliz natal!"/>
        
        <Counter />
      </div>
    </div>
  );
}

export default App;

/*
  React é composto por funções JS ou TS que retornam HTML!

  -> Formas de escrever o React: 
  - Classes (obsoletaa!!) -> Orientação a Objeto
  - Funções -> Paradigma Funcional

  -> Conceitos FUNDAMENTAIS:
  - JSX ou TSX (JSX = JS + XML(HTML)  // TSX = TS + XML(HTML))
  - Componentes
  - Propriedades: "atributos" para personalizar os nossos componentes
  - Estados (um tipo de hook)

  OBS: Devemos retornar apenas um elemento por componente
  - React Fragment é uma forma alternativa de enviarmos um único elemento

  OBS: TypeScript é o nosso velho amigo JS, mas com TIPAGEM!
*/
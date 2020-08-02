import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/Home';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

// function CadastroVideo() {
//   return (
//     <div>
//       Página de Cadastro de Vídeo
//     </div>
//   );
// }

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* exact = rota exata */}
      {/* <Route path="/" component={App} exact /> */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      {/* <Route path="/" component={App} /> */}

      {/* Carregado se não encontrar nada */}
      {/* Arrow function */}
      {/* <Route component={() => (<div>Página 404</div>)} /> */}

      <Route component={Pagina404} />
    </Switch>
    {/* <App />
    <CadastroVideo />
    <CadastroCategoria /> */}

  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

import './App.css'

import { Header, Conteudo, Footer } from './components';

const App = () => {

  return (
    <>
      <Header nameUser="Patricia"/>
      <Conteudo>
        <h2>Titulo</h2>
        <p>Lorem, ipsum dolor.</p>
      </Conteudo>
      <Footer />
    </>
  )
};

export { App };

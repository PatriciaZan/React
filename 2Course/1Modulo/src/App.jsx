import { BrowserRouter, Router, Routes } from 'react-router-dom';
import './App.css'
import { Conteudo, Footer, Header } from './components';
import { Inicial } from './pages';
import { AppContextProvider } from './contexts/AppContext';


const App = () => {

  return (
    // <>
    // <Header nameUser="Patricia"/>
    //   <Conteudo>
    //     <Inicial />
    //   </Conteudo>
    //   <Footer /> 
    // </>
    <AppContextProvider>
      <BrowserRouter>
       <Router />
      </BrowserRouter>
    </AppContextProvider>
      
   )
};

export { App };


{/* <Header nameUser="Patricia"/>
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Footer /> */}
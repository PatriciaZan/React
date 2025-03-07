import { Outlet } from "react-router-dom"
import { Conteudo, Footer, Header } from "../../components"
import { AppContext } from "../../contexts/AppContext";
import { useAppContext } from '../../hooks/useAppContext'

const LayoutPadrao = () => {
  const {criador} = useAppContext();
  return (
    <>
        <Header nameUser="Patricia"/>
        <Conteudo>
            <Outlet />
        </Conteudo>
        <Footer criador={criador}/> 
    </>
     
  )
}

export { LayoutPadrao }
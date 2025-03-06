import { Outlet } from "react-router-dom"
import { Conteudo, Footer, Header } from "../../components"


const LayoutPadrao = () => {
  return (
    <>
        <Header nameUser="Patricia"/>
        <Conteudo>
            <Outlet />
        </Conteudo>
        <Footer /> 
    </>
     
  )
}

export { LayoutPadrao }
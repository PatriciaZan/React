import { Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto/CampoTexto"
import style from './FormCriarTarefa.module.css'

const FormCriartarefa = () => {
  return (
    <form className={style.FormCriarTarefa}>
      <CampoTexto />
      <Botao texto='+'/>
    </form>
  )
}

export {FormCriartarefa}
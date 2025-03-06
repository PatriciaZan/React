import { FormCriartarefa, ListaTarefas } from "../../components"
import style from './Inicial.module.css'

const Inicial = () => {
  return (
    <div className={style.Inicial}>
        <FormCriartarefa />
        <ListaTarefas />
    </div>
  )
}

export { Inicial }
import { useAppContext } from "../../../hooks/useAppContext";
import { Botao, TIPO_BOTAO } from "../../Botao"
import style from './ListaTarefaLi.module.css'

const ListatarefaItem = (props) => {
  const {id, nome} = props;
  const {removerTarefa} = useAppContext();
  return (
    <li className={style.ListaTarefaItem}>
        {nome}
        <Botao 
        texto='-' 
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa}/>
    </li>
  )
}

export {ListatarefaItem}
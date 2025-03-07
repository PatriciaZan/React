import { useState } from "react";
import { useAppContext } from "../../../hooks/useAppContext";
import { Botao, TIPO_BOTAO } from "../../Botao"
import style from './ListaTarefaLi.module.css'
import { CampoTexto } from '../../CampoTexto'

const ListatarefaItem = (props) => {
  const {id, nome} = props;
  const [estaEditando, setEstaEditando] = useState(false);

  const {editarTarefa ,removerTarefa} = useAppContext();

  const onBLurTarefa = (evento) => {
    const nomeTarefa = event.currentTarget.value
    editarTarefa(id, nomeTarefa)
    setEstaEditando(false)
  }

  return (
    <li className={style.ListaTarefaItem}>
      {estaEditando && (
        <CampoTexto 
          defaultValue={name}
          onBLur={onBLurTarefa()}
          autoFocus
        />
      )}
      {!estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)} />
      )}

        {nome}
        <Botao 
        texto='-' 
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa}/>
    </li>
  )
}

export {ListatarefaItem}
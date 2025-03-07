import { useAppContext } from "../../hooks/useAppContext";

import style from './ListaTarefas.module.css'

const ListaTarefas = () => {
    const { tarefas } = useAppContext();

  return (
    <ul className={style.ListaTarefas}>
      {!tarefas.length && (
        <p>Não há tarefas cadastradas</p>
      )}
        {tarefas.map(item => <ListaTarefas key={item.id} id={item.id} nome={item.nome}/>)}
    </ul>
  )
}

export { ListaTarefas }
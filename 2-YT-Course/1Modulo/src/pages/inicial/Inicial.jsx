import { useState } from "react"
import { FormCriartarefa, ListaTarefas } from "../../components"
import style from './Inicial.module.css'
import {useAppContext} from '../../hooks/useAppContext'

const Inicial = () => {
  const {tarefas} = useAppContext();
//  const [tarefas, setTarefas] = useState([
//     {id: 1, nome: "Item 1"},
//     {id: 2, nome: "Item 2"},
//     {id: 3, nome: "Item 3"}
//   ]);

  // const tarefas = [
  //         {id: 1, nome: "Item 1"},
  //         {id: 2, nome: "Item 2"},
  //         {id: 3, nome: "Item 3"},
  //     ]

  return (
    <div className={style.Inicial}>
        <FormCriartarefa/>
        <ListaTarefas />
    </div>
  )
}

export { Inicial }
import { useState } from "react"
import { Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto/CampoTexto"
import style from './FormCriarTarefa.module.css'
import { useAppContext } from "../../hooks/useAppContext"
import { Loading } from "../Loading/Loading"

const FormCriartarefa = (props) => {
  const { adiconarTarefa } = useAppContext();

  const [nomeTarefa, setNomeTarefa] = useState();
  //const { setTarefas} = props;

  const onChangeNomeTarefa = (event) => {
    setNomeTarefa(event.currentTarget.value);
  };

  const addTarefas = (event) => {
    event.preventDefault();

    if(!nomeTarefa){
      return;
    }

   
    setNomeTarefa("")
  }

  return (
    <form 
        className={style.FormCriarTarefa}
        onSubmit={addTarefas}>
      <CampoTexto 
        value={nomeTarefa} 
        onChange={onChangeNomeTarefa}/>
      <Botao texto={loadingCriar ? <Loading /> : '+'}/>
    </form>
  )
}

export {FormCriartarefa}
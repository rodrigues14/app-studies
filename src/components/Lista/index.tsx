import { ITarefa } from "../../types/ITarefa";
import Item from "./item";
import style from './Lista.module.scss'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map(item => (
          <Item 
          selecionaTarefa={selecionaTarefa}
            {...item}
            key={item.id}
          />
        ))}
      </ul>
    </aside>
  )
}
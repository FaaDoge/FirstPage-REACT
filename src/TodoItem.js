import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
//import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="Item">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
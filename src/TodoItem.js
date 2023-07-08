
function TodoItem(props) {
  return (
    <li className="Item">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`Item-p ${props.completed && "Item-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}
export { TodoItem };
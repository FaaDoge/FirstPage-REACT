import React from 'react';
import { TodoContar } from './TodoContar';
import { TodoBuscar } from './TodoBuscar';
import { TodoLista } from './TodoLista';
import { TodoItem } from './TodoItem';
import { CrearTodoBoton } from './CrearTodoBoton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: true },
  { text: 'USAR DERIVADOS', completed: true },
];

function App() {
  const [todos, settodo]=React.useState(defaultTodos);
  const [buscarValor, setValor] = React.useState();
  const completedTodos=todos.filter(todo => !!todo.completed).length;
  

     console.log(buscarValor);
  return (
    <>
      <TodoContar completed={completedTodos} total={todos.length} />
      <TodoBuscar
      buscarValor={buscarValor}
      setValor={setValor} />

      <TodoLista>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoLista>
      
      <CrearTodoBoton />
    </>
  );
}

export default App;
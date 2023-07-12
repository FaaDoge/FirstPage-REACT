import React from 'react';
import { TodoContar } from './TodoContar';
import { TodoBuscar } from './TodoBuscar';
import { TodoLista } from './TodoLista';
import { TodoItem } from './TodoItem';
import { CrearTodoBoton } from './CrearTodoBoton';

{/*const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },
];*/}


//localStorage.setItem('TASK',defaultTodos);
//localStorage.removeItem('TASK');


function useLocalStorage(itemName,initialvalue){

 
 
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if(!localStorageItem){
   localStorage.setItem(itemName,JSON.stringify(initialvalue));
   parsedItem=initialvalue;
  }else{
  parsedItem=JSON.parse(localStorageItem);
 }

 const[item,setItem]= React.useState(parsedItem);

 const saveItem = (newItem) => {
  localStorage.setItem(itemName,JSON.stringify(newItem))
   setItem(newItem)
 };

 return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TASK',[]);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <>
      <TodoContar
        completed={completedTodos}
        total={totalTodos} 
      />
      <TodoBuscar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoLista>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoLista>
      
      <CrearTodoBoton />
    </>
  );
}

export default App;
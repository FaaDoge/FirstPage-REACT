//import './TodoContar.css'

function TodoContar({completed,total}){
    return(
      <h1 className='TodoContar'>
        Has Completado <span> {completed} </span>
        de <span>{total}</span> TODOs
      </h1>
    );
  }
  
  export {TodoContar};
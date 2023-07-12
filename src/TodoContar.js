//import './TodoContar.css'

function TodoContar({completed,total}){
  if(completed==total){
   return(
     <h1 className='TodoContar'>
        <h1 className='TodoContar'>
       FELICIDADES has Completado los <span> {completed} </span> TODOs
     </h1>
     </h1>
   );
  }
  else{
   return(
     <h1 className='TodoContar'>
       Has Completado <span> {completed} </span>
       de <span>{total}</span> TODOs
     </h1>
   );
  } 
}
export {TodoContar};
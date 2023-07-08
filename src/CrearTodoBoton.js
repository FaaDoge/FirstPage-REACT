function CrearTodoBoton( ){
    return(
        <button className="boton"  onClick={
            (event)=>{console.log('Le diste click')
            console.log(event)}} >+</button>
    );
  }
  
  export {CrearTodoBoton};
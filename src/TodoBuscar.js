import React, { useState } from "react";
function TodoBuscar({
  buscarValor, setValor,
}){
     
    return(
      <input 
      className="buscar"
      placeholder="Cortar Cebolla"
      value={buscarValor}
      onChange={(event)=>{
          setValor(event.target.value);
          
      }}  
      />
    
    );
  }
  
  export {TodoBuscar};
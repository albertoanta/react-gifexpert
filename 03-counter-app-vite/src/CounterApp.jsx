// Tarea 
// https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757


import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ( {value} ) => {
  
  console.log('------ Componente CounterApp')
  console.log ( value);
  
  const[ counter, setCounter ] = useState( value );


  const HandleAdd = ( event ) => { 
    //console.log(event)
    // console.log(+1);
    setCounter (counter +1 ) ;
   //  setCounter( (c) => c+1 ) ; // es analogo a lo anterior
  
  }

  const HandleSubstract = () => setCounter (counter -1 ) ;
   
  const HandleReset = (event) => { 
  
    setCounter (value) ;
   //  setCounter( (c) => c+1 ) ;
  
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <h4> Contador hooks {counter} </h4>

      {/* <button onClick={ (event) => HandleAdd(event) }> */}
      <button onClick={ HandleAdd }>
        +1
      </button>

      <button onClick={ HandleSubstract }> -1 </button>
      <button aria-label="btn-reset" onClick={ HandleReset }> Reset </button>
    </>
  )
} 

CounterApp.propTypes = { 
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value :1234

}
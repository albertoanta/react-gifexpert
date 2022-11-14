// import { Fragment } from "react";
// export const FirsApp = () => {
//   return (
//     <Fragment>
//       <h1> First App</h1>
//       <p>Esto es un subtitulo</p>
//     </Fragment>
//   )
// }

// En vez de importar y ponerlo como un fragmento con la etioqueta <Fragment></Fragment>
// podemos poner <> que es análogo

const newMessage = [1,2,3,4,5,6,7,8,9];
const secondMessage = {
  message : 'Hola Mundo',
  title : 'Alberto'
  };

const  hazSaludo = () =><h3>Esto es una peticion de saludo</h3>;

import PropTypes from "prop-types";

export const FirstApp = ( {title, subTitle, name } ) => {
  

  console.log ( title);


  return (
    <>
      {/* <h1> {title} </h1> */}
      <h1 data-testid="test-title" > {title} </h1>
      {/* <h1> { `Primera App` } { newMessage}</h1> */}
      {/* <code> { JSON.stringify( secondMessage) }</code> */}
      <p>Esto es un subtitulo</p>
      { hazSaludo() }
      <p>{ subTitle +1}</p>
      <p>{ subTitle }</p>
      
      <p>{name}</p>
    </>
  )
} 

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  // subTitle: PropTypes.number
  subTitle: PropTypes.string

}

FirstApp.defaultProps = {
  name : "Alberto Anta",
  subTitle: "No hay subtitulo",
  // subTitle: 123,
  // title: "No hay titulo",

}
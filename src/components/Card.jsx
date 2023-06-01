import React from 'react'
import styles from "./styles.module.css"
const Card = (props) => {
  return (
    <>  
    <div className={styles.container}>
        <h3>Username: {props.usuario.nombre}</h3>
        <h4>Edad: {props.usuario.edad}</h4>
        <h5>Es user favorito? {props.usuario.favorito?"SEEEEE!!!":"No, ni a gancho"}</h5>
    </div>
    </>
    
  )
}

export default Card
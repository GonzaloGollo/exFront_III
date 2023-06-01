import React from 'react'
import styles from "./styles.module.css"

const Comentario = (props) => {
  return (
    <>
        <div className={styles.comentario}>
        {props.descripcion};
        </div>
    </>
  )
}

export default Comentario
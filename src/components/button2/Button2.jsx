import React from 'react'
import styles from "./button2.module.css"

const Button2 = (props) => {
  return (
    <button className={styles.btn}>
      {props.text}
    </button>
  )
}

export default Button2
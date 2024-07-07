import React from 'react'
import styles from './button.module.css'; 

const Button = ({isActive = false, text, onClick }) => {
  return (
    <button className={`${styles.btn_style} ${isActive ? styles.active : styles.not_active}`}>
      {text}
    </button>
  )
}

export default Button;

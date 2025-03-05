import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    const anoAtual = (new Date()).getFullYear();

  return (
    <div className={styles.Footer}>
        React Básico - {anoAtual} - Patricia - TIC em Trilhas
    </div>
  )
}

export { Footer };
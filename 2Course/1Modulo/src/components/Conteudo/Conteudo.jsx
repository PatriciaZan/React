import React from 'react'
import styles from './Conteudo.module.css'

const Conteudo = (props) => {
    const { children } = props
  return (
    <div className={styles.Conteudo}>{children}</div>
  )
}

export {Conteudo};
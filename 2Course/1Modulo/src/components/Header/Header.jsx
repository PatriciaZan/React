import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className={styles.Header}>
      <Link to="/">
        <h1>
          <span>ToDo</span>List
        </h1>
      </Link>

      <Link to="/sobre-nos">Sobre Nós</Link>
    </div>
  )
}

export { Header }
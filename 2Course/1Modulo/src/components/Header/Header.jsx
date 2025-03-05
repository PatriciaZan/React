import React from 'react'
import styles from './Header.module.css'

const Header = () => {

  return (
    <div className={styles.Header}>
      <h1>
        <span>ToDo </span>List</h1>
    </div>
  )
}

export { Header }
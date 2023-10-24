import React from 'react'
import styles from './Select.module.css'

export default function Select({name, value}) {
  return (
    <div className={styles.select}>
        <label htmlFor={name}> {name} </label>
        <div className={styles.box}>
        <select name={name} id={name} value={value || ''} >

        <option > {name} </option>
        <option > choose an option </option>

        </select>
        </div>
    </div>
  )
}

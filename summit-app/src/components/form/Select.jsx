import React from 'react'
import styles from './Select.module.css'

export default function Select({name}) {
  return (
    <div className={styles.select}>
        <label htmlFor={name}> {name} </label>
        <div className={styles.box}>
        <select name={name} id={name} >

        <option > {name} </option>
        <option > Master Room </option>
        <option > Grand Room </option>
        <option > Junior Room </option>

        </select>
        </div>
    </div>
  )
}

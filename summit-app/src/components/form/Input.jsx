import React from 'react'
import styles from './Input.module.css'

export default function Input({name}) {
  return (
    <div className={styles.select}>
        <label htmlFor={name}> {name} </label>
        <div className={styles.box}>
        <select name={name} id={name} >

        <option > {name} </option>
        <option > 1 </option>
        <option > 2 </option>
        <option > 3 </option>
        <option > 4 </option>
        <option > 5 </option>
        <option > 6 </option>
        <option > 7 </option>
        <option > 8 </option>
        <option > 9 </option>
        <option > 10 </option>

        </select>
        </div>
    </div>
  )
}

import { useState } from 'react'
import styles from './Counter.module.css'

export default function Counter({ text, count }) {
  return (
    <li className={styles.counterBlock}>
      <h3 className={styles.counterName}>{text}</h3>
      <div className={styles.counterCircle}>
        <h1 className={styles.counter}>{count}</h1>
        <p className={styles.counterText}>задач</p>
      </div>
    </li>
  )
}

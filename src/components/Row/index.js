import React from 'react';
import styles from './Row.module.css'

export const Row = ({ children }) => (
  <div className={styles.row}>
    { children }
  </div>
)
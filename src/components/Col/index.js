import React from 'react';
import styles from './Col.module.css'

export const Col = ({children}) => {

  return (
    <div className={styles.col}>
      {children}
    </div>
  )
}
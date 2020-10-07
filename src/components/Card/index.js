import React from 'react';
import styles from './card.module.css'


const Card = ({
  category,
  title,
  image,
  author
}) => {
  return(
    <a className={styles.card}>
      <div className={styles['card-container']}>
        <div
          className={styles.image}
          style={{backgroundImage: `url(${image})`}}
        />
        <h3 className={`font-primary-bold ${styles.h3}`}>
          <span className={styles.category}>{ category }</span>.&nbsp;
          {title}
        </h3>
        { author && (
          <p className={`font-secondary ${styles.p}`}>Por {author}</p>
        )}
      </div>
    </a>
  )
}


export default Card;
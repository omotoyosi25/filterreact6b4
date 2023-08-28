import React from 'react'
import {GrLike, GrShareOption} from 'react-icons/gr'
import styles from '../styles/food.module.css'

export default function Icon() {
  return (
    <aside className={styles.icons}>
        <GrLike className='mx-8'/>
        <GrShareOption className='mx-8'/>
    </aside>
  )
}

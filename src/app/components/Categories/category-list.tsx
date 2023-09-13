import React from 'react'
import styles from './categories.module.css'

type Props = {}

const CategoryList
    = (props: Props) => {
        return (
            <>
                <div className={`${styles.categoryList} ${styles.burguer}`}>
                    <div><span className={styles.categoryText}>Texto</span></div>
                </div>
                <div className={`${styles.categoryList} ${styles.pizza}`}>
                    <div><span className={styles.categoryText}>Texto</span></div>
                </div>
                <div className={`${styles.categoryList} ${styles.chicken}`}>
                    <div><span className={styles.categoryText}>Texto</span></div>
                </div>
            </>
        )
    }

export default CategoryList

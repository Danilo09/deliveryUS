import React from 'react'
import styles from './categories.module.css'

type Props = {}

const CategoryTitle = (props: Props) => {
    return (
        <div>
            <h1 className={styles.categoryTitle}>What would you like to eat?</h1>
        </div>
    )
}

export default CategoryTitle
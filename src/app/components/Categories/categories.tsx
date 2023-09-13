import React from 'react'
import CategoryList from './category-list'
import CategoryTitle from './category-title'
import styles from './categories.module.css'
type Props = {}

const Categories = (props: Props) => {
    return (
        <section>
            <CategoryTitle />
            <div className={styles.categoryContent}>
                <CategoryList />
            </div>
        </section>
    )
}

export default Categories
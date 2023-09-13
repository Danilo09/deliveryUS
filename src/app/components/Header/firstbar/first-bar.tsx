import React from 'react'
import styles from './first-bar.module.css'
type Props = {}

function FirstBar({ }: Props) {
    return (
        <section className={styles.firstBar}>Frete Gratis acima de 50R$</section>
    )
}

export default FirstBar
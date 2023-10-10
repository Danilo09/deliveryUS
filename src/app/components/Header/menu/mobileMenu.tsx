import React, { useState } from 'react'
import styles from './mobile-menu.module.css'

type Props = {
    action?: () => void
}

const MobileMenu: React.FC<Props> = (props: Props) => {

    const action = props.action

    return (
        <nav
            className={`${styles.mobileMenu}`}>
            <a
                onClick={action}
                className={styles.closeButton}>X</a>
            <ul>
                <li><a href="">Início</a></li>
                <li><a href="">Produtos</a></li>
                <li><a href="">Contato</a></li>
                <li><a href="">Entrar</a></li>
            </ul>
        </nav>
    )
}

export default MobileMenu


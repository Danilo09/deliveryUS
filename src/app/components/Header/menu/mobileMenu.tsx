import React, { useState } from 'react'
import styles from './mobile-menu.module.css'

type Props = {}

const MobileMenu: React.FC = (props: Props) => {

    const [menuToggle, setMenuToggle] = useState(true)

    const toggleMobileMenu = () => {
        setMenuToggle(!menuToggle);
    }

    return (
        <nav
            className={`${styles.mobileMenu} ${menuToggle ? 'menuOpen' : 'menuClose'}`}>
            <span
                onClick={toggleMobileMenu}
                className={styles.closeButton}>X</span>
            <ul>
                <li>Início</li>
                <li>Produtos</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}

export default MobileMenu
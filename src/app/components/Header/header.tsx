"use client"
import React, { useState } from 'react'
import MobileMenu from './menu/mobileMenu'
import styles from './menu/mobile-menu.module.css'

type Props = {}

const Header = (props: Props) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <section>
            <div className='logo'>
                <span>Delivery US</span>
            </div>
            <button
                className={!isMobileMenuOpen ? 'menuOpen' : 'menuClose'}
                onClick={toggleMobileMenu}>Menu here!</button>
            {isMobileMenuOpen && <MobileMenu />}

        </section>
    )
}

export default Header
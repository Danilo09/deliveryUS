"use client"
import React, { useState } from 'react'
import MobileMenu from './menu/mobileMenu'
import styles from './header.module.css'
import Button from '@mui/material/Button';
import FirstBar from './firstbar/first-bar';
import Logo from '../../../../public/logo.svg'
import Image from 'next/image';
type Props = {}



const Header = (props: Props) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <>
            <FirstBar />
            <section className={styles.Header}>
                <div className={styles.Logo}>
                    <Image
                        priority
                        src={Logo}
                        alt='Logo Delivery Us'
                    />
                </div>
                <Button
                    className={!isMobileMenuOpen ? 'menuOpen' : 'menuClose'}
                    onClick={toggleMobileMenu}>Menu here!</Button>
                {isMobileMenuOpen && <MobileMenu />}

            </section>
        </>
    )
}

export default Header
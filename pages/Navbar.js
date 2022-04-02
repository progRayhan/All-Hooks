import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.li}>
                            <Link href="/Components/useState">
                                <a className={styles.a}>useSTate</a>
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/Components/useEffect">
                                <a className={styles.a}>useEffect</a>
                            </Link>
                        </li>
                        <li className={styles.li}>
                            <Link href="/Components/useForm">
                                <a className={styles.a}>useForm</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
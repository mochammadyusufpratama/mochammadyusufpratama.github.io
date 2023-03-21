import styles from '@/styles/app.module.css';
import Link from 'next/link';

export default function navbar() {
    return (
        <div className={styles.navbar}>
            <nav>
                <Link href="/" className={styles.logo}>MY</Link>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/portofolio">Portofolio</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div >
    );
}
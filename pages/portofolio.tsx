import Head from '../component/head';
import styles from '@/styles/app.module.css';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Contact from '../component/contact';

export default function about() {
    return (
        <>
            <Head />
            <main className={styles.main}>
                <Navbar />
                <div className={styles.porto}>
                    <h1>My Portofolio</h1>
                    <div>
                        <div className={styles.pict}></div>
                        <div className={styles.pict1}></div>
                        <div className={styles.pict2}></div>
                    </div>
                    <div>
                        <div className={styles.pict}></div>
                        <div className={styles.pict1}></div>
                        <div className={styles.pict2}></div>
                    </div>
                    <div>
                        <div className={styles.pict}></div>
                        <div className={styles.pict1}></div>
                        <div className={styles.pict2}></div>
                    </div>
                </div>
                <Contact />
                <Footer />
            </main>
        </>
    );
}
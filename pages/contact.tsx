import Head from '../component/head';
import styles from '@/styles/app.module.css';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Contact from '../component/contact';

export default function contact() {
    return (
        <>
            <Head />
            <main className={styles.main}>
                <Navbar />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
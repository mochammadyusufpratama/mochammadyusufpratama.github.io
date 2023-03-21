import styles from '@/styles/app.module.css';

export default function footer() {
    return (
        <div className={styles.footer}>
            <div>
                <h1>Thank You</h1>
                <img src="/favicon.ico" alt="" width={100} />
            </div>
            <hr />
            <p>
                Copyright By <a href="https://www.instagram.com/mochammadyusufpratama/">
                    Mochammad Yusuf Pratama
                </a>
            </p>
        </div>
    );
}
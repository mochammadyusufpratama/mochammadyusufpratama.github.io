import styles from '@/styles/app.module.css';

export default function contact() {
    return (
        <div className={styles.contact}>
            <h1>Contact</h1>
            <div>
                <div className={styles.grid1}>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Masukkan Email' />
                    </div>
                    <div>
                        <label htmlFor="">Nama</label>
                        <input type="text" placeholder='Masukkan Nama' />
                    </div>
                    <div>
                        <label htmlFor="">Type Comment</label>
                        <textarea name="" id="" rows={7} placeholder='Comment Section Here'></textarea>
                    </div>
                    <button>Send</button>
                </div>
                <div className={styles.grid2}></div>
            </div>
        </div>
    );
}

import Head from '../component/head';
import styles from '@/styles/app.module.css';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Contact from '../component/contact';

export default function Home() {
  return (
    <>
      <Head />
      <main className={styles.main}>
        <Navbar />
        <div className={styles.sec1}>
          <div className={styles.desc}>
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repudiandae iste explicabo, magni quo veritatis perferendis, sint ipsam doloremque deserunt ut porro earum.</p>
            <button>Know More</button>
          </div>
        </div>
        <div className={styles.sec2}>
          <div className={styles.desc}>
            <h1>Description</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iste officia consectetur odio libero quidem, unde quisquam corporis, soluta eius doloribus a et labore illo ratione non earum. Fugiat, optio asperiores! Laudantium labore necessitatibus illo inventore nisi assumenda voluptatibus ea sequi incidunt quam fuga ipsa, dolor reiciendis. Ea consequuntur praesentium beatae ad animi, similique eos nihil at odit neque doloribus excepturi inventore cumque commodi minus, natus ducimus nisi, dolorem reiciendis.</p>
          </div>
          <div className={styles.photo} ></div>
        </div>
        <div className={styles.img}>
          <h1>Images</h1>
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
  )
}

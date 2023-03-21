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
                <div className={styles.about}>
                    <div className={styles.desc}>
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit perferendis dignissimos doloribus, molestias optio. Temporibus possimus, velit, autem est repellendus unde sint error nobis molestiae dolorum culpa consectetur debitis quaerat quidem deleniti eum officiis minima accusamus ad ullam facere! Necessitatibus amet itaque, numquam facilis suscipit perferendis excepturi. Labore, facilis nemo reiciendis quae nostrum perspiciatis ut quod saepe voluptas alias eius eum esse sunt corporis tempora sint id iure commodi minima autem officia ducimus inventore sit ullam! Corporis, delectus. Aspernatur ipsa nobis saepe voluptatibus voluptas, quasi ut unde tempore! Mollitia suscipit eius consectetur, corrupti magni hic ipsum amet facere dicta.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam reprehenderit perferendis dignissimos doloribus, molestias optio. Temporibus possimus, velit, autem est repellendus unde sint error nobis molestiae dolorum culpa consectetur debitis quaerat quidem deleniti eum officiis minima accusamus ad ullam facere! Necessitatibus amet itaque, numquam facilis suscipit perferendis excepturi. Labore, facilis nemo reiciendis quae nostrum perspiciatis ut quod saepe voluptas alias eius eum esse sunt corporis tempora sint id iure commodi minima autem officia ducimus inventore sit ullam! Corporis, delectus. Aspernatur ipsa nobis saepe voluptatibus voluptas, quasi ut unde tempore! Mollitia suscipit eius consectetur, corrupti magni hic ipsum amet facere dicta.</p>
                    </div>
                </div>
                <Contact />
                <Footer />
            </main>
        </>
    );
}
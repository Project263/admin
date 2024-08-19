/* eslint-disable max-len */
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Админка&nbsp;</p>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Logo.svg"
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
        <h1>Меняем вас к лучшему</h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://auth.theaesthetics.ru"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Вход <span>-&gt;</span>
          </h2>
          <p>Вход в админку</p>
        </a>
      </div>
    </main>
  );
}

import Link from "next/link";

import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <ul className={styles.title}>
          <li className={styles.item}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/users">
              <a>users</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

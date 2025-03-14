import styles from "./Header.module.css";
import Link from 'next/link';

const Header = () => (
  <nav className={styles.navbar}>
    <h1 className={styles.logo}>My Portfolio</h1>
      <ul className={styles.navList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
  </nav>
);

export default Header;

import styles from "./navbar.module.scss";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <a href="/" className={styles.logoLink}>
          <img
            src="/nobe-cornell-logo.png"
            alt="nobe-cornell-logo"
            className={styles.nobeCornellLogo}
          />
        </a>
        <nav className={styles.navBar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/projects">
                <a>PROJECTS</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/team">
                <a>TEAM</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/apply">
                <a>APPLY</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

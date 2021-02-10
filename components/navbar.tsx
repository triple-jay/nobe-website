import styles from "./navbar.module.scss";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <div className={styles.nav_container}>
      {/*clickable logo*/}
      <a href="/">
        <img
          src="/nobe-cornell.png"
          alt="nobe-cornell-logo"
          className={styles.nobe_cornell_logo}
        />
      </a>
      <nav className={styles.nav_bar}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/team">
              <a>Team</a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/apply">
              <a>Apply</a>
            </Link>
          </li>
          <li className={styles.nav_item}>
            <Link href="/tiingo">
              <a>Tiingo</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

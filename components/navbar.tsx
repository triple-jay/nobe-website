import styles from "./navbar.module.scss";
import Link from "next/link";
import { useState } from 'react';

export default function NavigationBar() {

  const [showNavList, setShowNavList] = useState(false);

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
          <img className={styles.hamburgerMenu} src="../nav-button.png" onClick={() => setShowNavList(!showNavList)} 
          style={showNavList ? {transform: 'rotate(90deg) translateX(calc(var(--multiplier) * -10px))'} : {}}/>
        </nav>
      </div>
            <ul className={styles.navList} style={showNavList ? {transform: 'scaleY(1)'} : {transform: 'scaleY(0)'}}>
            <li className={styles.navItem}>
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>
            {/* <li className={styles.navItem}>
              <Link href="/projects">
                <a>PROJECTS</a>
              </Link>
            </li> */}
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
    </div>
  );
}

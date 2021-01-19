import Head from 'next/head'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NOBE Cornell</title>
        <link rel="icon" href="/nobe-cornell.png" />
      </Head>

      <body className={styles.body}>

        <header>
          <div className={styles.nav_container}>

            <img src="/nobe-cornell.png" alt="nobe-cornell-logo" className={styles.nobe_cornell_logo} />

            <nav className={styles.nav_bar}>
              <ul className={styles.nav_list}>
                <li className={styles.nav_item}><a href="#">Home</a></li>
                <li className={styles.nav_item}><a href="#">Team</a></li>
                <li className={styles.nav_item}><a href="#">Projects</a></li>
                <li className={styles.nav_item}><a href="#">Apply</a></li>
              </ul>
            </nav>
          </div>
        </header>

      
        <div className={styles.nobe_cornell}>
          <h2>NOBE&nbsp;</h2>
          <h2 className={styles.cornell}>Cornell</h2>
          <h3> Preparing students for success in business and engineering.</h3>
        </div>

      </body>
      
    </div>
  )
}

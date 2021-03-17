import Head from "next/head";
import styles from "./index.module.scss";
import "../components/navbar.tsx";
// import backgroundImage from "../public/cornell-no-attribution.jpg";
import NavigationBar from "../components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NOBE </title>
        <link rel="icon" href="/nobe-cornell.png" />
      </Head>
      <div className={styles.container}>
        <NavigationBar />
        <div className={styles.body}>
          <div className={styles.nobe_cornell}>
            <h2>NOBE&nbsp;</h2>
            <h2 className={styles.cornell}>Cornell</h2>
            <h3>
              {" "}
              Preparing students for success in business and engineering
            </h3>
            <p className={styles.attribution}>
              "Chrysler Building at Sunset, NYC" by diana_robinson is licensed
              with CC BY-NC-ND 2.0. To view a copy of this license, visit
              https://creativecommons.org/licenses/by-nc-nd/2.0/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import styles from "./index.module.scss";
import "../components/navbar.tsx";
// import backgroundImage from "../public/cornell-no-attribution.jpg";
import NavigationBar from "../components/navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NOBE Cornell </title>
        <link rel="icon" href="/nobe-cornell.png" />
      </Head>

      <div className={styles.container}>
        <NavigationBar />
        <div className={styles.body}>

          <div className={styles.nobe_cornell}>
            <h2>NOBE at&nbsp;</h2>
            <h2 className={styles.cornell}>Cornell</h2>
            <h3>
              {" "}
              Preparing students for success in business and engineering
            </h3>
          </div>

        </div>

      </div>
    </div>
  );
}

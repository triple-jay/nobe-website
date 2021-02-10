import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import styles from "./tiingo.module.scss";

export default function Tiingo() {
  return (
    <article className={styles.container}>
      <NavigationBar />
      <section className={styles.body}>
        <h2 className={styles.section_title}>
          NOBE Spring 2021 Stock Market Game
        </h2>
        <section className={styles.tiingo_details}>
          <p className={styles.details}>
            The NOBE Spring 2021 Stock Market Game is a simulated investment
            competition where participants will have the chance to hone their
            investment skills and learn more about portfolio management. We are
            proud to partner with Tiingo: a next-generation financial platform
            that uses both a REST and a Real-Time Data API to provide a
            realistic simulation of stock-market data.
          </p>
          <img src={"tiingo_horizontal_logo.png"} className={styles.logo} />
        </section>
        <img className={styles.example} src={"main_screen.png"} />
        <p className={styles.caption}>Dashboard</p>
        <img className={styles.example} src={"stats.png"} />
        <p className={styles.caption}>Portfolio Metrics</p>
        <img className={styles.example} src={"stocks.png"} />
        <p className={styles.caption}>Real-Time Stock Data</p>
        <h2 className={styles.section_title}>Prizes</h2>
        <ul className={styles.prizes}>
          <li>1st Place: $150</li>
          <li>2nd Place: $75</li>
          <li>3rd Place: $50</li>
        </ul>
        <a
          href="https://www.tiingo.com/portfolio/games/details/nobe.html"
          rel="noreferrer"
          className={styles.learn_button}
        >
          <button className={styles.button}>Learn More</button>
        </a>
      </section>
      <Footer />
    </article>
  );
}

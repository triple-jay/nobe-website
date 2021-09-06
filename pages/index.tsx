import Head from "next/head";
import styles from "./index.module.scss";
import "../components/navbar.tsx";
// import backgroundImage from "../public/cornell-no-attribution.jpg";
import NavigationBar from "../components/navbar";

export default function Home() {

  let headersAndInformation = [
    {header: "Finance", information: "Focus on building foundation skills in financial modeling and valuations."},
    {header: "Engineering", information: "Master industry skills through  projects and develop deep understanding of analysis."},
    {header: "Consulting", information: "Develop problem solving skills while thinking practically and communcating practically."},
    {header: "Data Science", information: "Expland technical expertise for performing advanced data analysis."}
  ]

  return (
    <div className={styles.homePageContainer}>
      <Head>
        <title>NOBE Cornell </title>
        <link rel="icon" href="/nobe-cornell.png" />
      </Head>

      <div className={styles.homePageContent}>
        <NavigationBar />
        <div className={styles.bodyContent}>

          <div className={styles.nobeCornellText}>
            <h2 className={styles.nobeCornellHeadText}>
              NOBE AT <span style={{color: '#DE2A2A'}}>CORNELL</span>
            </h2>
            <h3 className={styles.nobeCornellSecondaryText}>
              {'Preparing students for success in business & engineering'}
            </h3>
          </div>

          {/* <div className={styles.nobeCornellInformation}>
            {headersAndInformation.map((elt) => {
              return (
                <div className={styles.nobeCornellInfoComp}>
                  <div className={styles.infoCompHeader}>
                    {elt.header}
                  </div>
                  <div className={styles.infoCompContent}>
                    {elt.information}
                  </div>
                </div>
              )
            })}
          </div> */}


        </div>

      </div>
    </div>
  );
}

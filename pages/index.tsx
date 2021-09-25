import Head from "next/head";
import styles from "./index.module.scss";
import "../components/navbar.tsx";
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
              NOBE AT CORNELL
            </h2>
            <h4 className={styles.nobeCornellminiHeader}>
              {'National Organization of Business & Engineering'}
            </h4>
            <div className={styles.headerDivider}></div>
            <h3 className={styles.nobeCornellSecondaryText}>
              {'Developing future leaders through the intersection of business & engineering'}
            </h3>
          </div>
          <img src="../tlcorner.png" className={styles.tlCorner}/>
          <img src="../trcorner.png" className={styles.trCorner}/>
          <img src="../blcorner.png" className={styles.blCorner}/>
          <img src="../brcorner.png" className={styles.brCorner}/>
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

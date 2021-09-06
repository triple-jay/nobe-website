import styles from './about.module.scss';
import NavigationBar from "../components/navbar";

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <NavigationBar />
            <div className={styles.aboutNobe}>
                <div className={styles.aboutNobeText}>
                    <div className={styles.aboutNobeContent}>
                        <h2 className={styles.aboutHeader}>ABOUT NOBE</h2>
                        <h3 className={styles.aboutSecHeader}>Our Story</h3>
                        <div className={styles.divider}></div>
                        <p className={styles.aboutContent}>
                            As part of a national organizaion, NOBE at Cornell hopes to build a 
                            network that will continually build resources to foster growth for 
                            individuals who hope to constanly meet the evolving demands they 
                            will face in today’s business world.
                        </p>
                        <p className={styles.aboutContent}>
                            Our mission is to educate Cornell students with business or
                            engineering backgrounds on how their respective fields can be integrated through networking
                            events, mentorship, and collaboration on projects requiring expertise in both disciplines. 
                        </p>
                    </div>
                    <img className={styles.nycPhoto} src="../nycphoto.svg"/>
                </div>
            </div>
            <div className={styles.placements}>
                <div className={styles.placementsContent}>
                    <img className={styles.placementsImage} src="../placements.svg"/>
                    <div className={styles.placementsText}>
                        <h2 className={styles.placementsHeader}>National Organization Alumni Placement</h2>
                        <p className={styles.aboutContent}>
                            From tech to finance to engineering, our alumni have taken 
                            their experiences from NOBE and  succeed in both engineering and 
                            business realms after graduation.
                        </p>
                        <div className={styles.divider}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import NavigationBar from "../components/navbar"
import Footer from '../components/footer'
import styles from './apply.module.scss'

import Link from "next/link";


export default function Apply() {
    return (
        <div className={styles.applyContainer}>
            <NavigationBar />
            <div className={styles.appTextAndImg}>
                <div className={styles.applicationTextContainer}>
                    <h3 className={styles.appHeader}>
                        National Organization General Application
                    </h3>
                    <p className={styles.appContent}>
                        Membership in NOBE is open to all who are interested! If you are 
                        interested in joining our organization, please fill out the form below! 
                        We want to get to know more about your interests, as well as the committee(s) 
                        you are interested in joining.
                    </p>
                    <p className={styles.appContent}>
                        We will be present at the following events: <br/>
                        ClubFest on February 13 9AM - 12PM, February 14 2PM - 5PM <br/>
                        Zoom Infomation Session
                    </p>
                    <div className={styles.divider}></div>
                </div>
                <img className={styles.appImage} src="../apply-image.svg" />
            </div>
            <div className={styles.teamLeadsAndAppLinks}>
                <div className={styles.teamLeadsContainer}>
                    <div className={styles.teamLeadsContainerContent}>
                        <h2 className={styles.teamLeadsHeader}>
                            TEAM LEADS
                        </h2>
                        <h3 className={styles.teamLeadsSubHeader}>
                            Application
                        </h3>
                        <div className={styles.divider}></div>
                        <p className={styles.teamLeadsContent}>
                            As part of a national organizaion we are hoping that everyone 
                            can be able to gain new experiences and explore new aveneues. 
                            For that reason, this semester we are interview for team leads.
                        </p>
                        <p className={styles.teamLeadsContent}>
                            If you have an idea that you are ready interested, we would 
                            love for you to go through our application process for team 
                            leads. To apply, be prepared to pitch your idea, implementation 
                            process, and companies that you would like to sponsor your project. 
                            If there are enough resources and interest available, then we look 
                            forward to starting new projects.
                        </p>
                    </div>
                </div>
                <ul className={styles.applicationLinks}>
                    <li className={styles.application}>
                        <a className={styles.appLink} href="https://forms.gle/i5SisHrPNAZfvUot7">General Member Application</a>
                    </li>
                    <li className={styles.application}>
                        <a className={styles.appLink} href="https://forms.gle/51KrW2GvS2hZ3djA7">Team Lead Application</a>
                    </li>
                    <li className={styles.application}>
                        <a className={styles.appLink} href="https://forms.gle/PZisAa589X23H67K6">Executive Board Application</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}
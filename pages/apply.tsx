import NavigationBar from "../components/navbar"
import styles from './apply.module.scss'

export default function Apply() {
    return (
    <body className={styles.body}>
        <NavigationBar />
        <div className={styles.container}>
            <h1>Apply</h1>
            <p className={styles.p}>
                Membership in NOBE is open to all who are interested! If you are interested in joining our organization, please
                fill out the form below! We want to get to know more about your interests, as well as the committee(s) you
                are interested in joining.
            </p>
            <p className={styles.p}>
                We will be present at the following events:
            </p>
            <ul>
                <li> ClubFest on February 13 9AM - 12PM, February 14 2PM - 5PM </li>
                <li> Zoom Infomation Session </li>
            </ul>
            <button className={styles.apply_button}>Apply now!</button>
            <p className={styles.p}>
                Joining NOBE means gaining access to exclusive networking events, mentorship opportunities, and the exciting
                opportunity to work on innovative projects in business and technology. If you have any questions,
                please feel free to reach out to our president, Andrew Osorio, at 
                <a className={styles.mail} href="mailto:ao296@cornell.edu"> ao296@cornell.edu</a>!
            </p>
        </div>
    </body>  
    );
}
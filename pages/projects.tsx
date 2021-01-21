import NavigationBar from "../components/navbar";
import { useState, MouseEvent } from 'react';
import styles from './projects.module.scss';

export default function Team() {

    const [description, setDescription] = useState('');
    type committee = 'finance' | 'consulting' | 'technology';

    function selectCommittee(e: MouseEvent<HTMLLIElement>, c: committee) {
        switch (c) {
            case 'finance':
                setDescription('This is the finance description.');
                break;
            case 'consulting':
                setDescription('This is the consulting description.');
                break;
            case 'technology': 
                setDescription('This is the technology description.');
                break;
        }
    }

    return (
    <body className={styles.body}>
        <NavigationBar />
        <div className={styles.container}>
            <h1>Who are we?</h1>
            <p className={styles.p}>
                Cornell NOBE is an organization dedicated to bridging the gap between business and technology
                in today's industry. We are comprised of three different committees: Finance, Consulting, and
                Technology. Each committee has one or more subteams each led by a project manager. Throughout
                the year, members in each subteam will work on a project related to their chosen committee's field.
            </p>
            <h2>Furthering Careers</h2>
            <p className={styles.p}> 
                Cornell NOBE will host several networking events throughout the semester. They will be held by 
                some of the leading business and technology companies across the world, and members will have
                the opportunity to talk to recruiters and get to know more about what each company has to offer. 
                Below, you can see some companies that hosted an event at our chapter in past semesters.
            </p>
            <h2>Committees</h2>
            <ul className={styles.committee_list}> 
                <li className={styles.committee} onClick={e => selectCommittee(e, 'finance')}>Finance</li>
                <li className={styles.committee} onClick={e => selectCommittee(e, 'consulting')}>Consulting</li>
                <li className={styles.committee} onClick={e => selectCommittee(e, 'technology')}>Technology</li>
            </ul>
            <div>
                <p className={styles.p}>{description}</p>
            </div>
        </div>
    </body>
    );
}
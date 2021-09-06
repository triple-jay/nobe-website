import NavigationBar from "../components/navbar";
import Footer from '../components/footer';
import { useState, MouseEvent } from 'react';
import styles from './projects.module.scss';

export default function Projects() {

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
    <div className={styles.projectsContainer}>
        <NavigationBar />
        <div className={styles.projectsContent}>
            <h2 className={styles.projectsHeader}>PROJECTS OVERVIEW</h2>
            <h3 className={styles.projectsSubHeader}>Furthering Careers</h3>
            <div className={styles.projectsDivider}></div>
            <p className={styles.projectsDescription}>
                Cornell at NOBE will host several networking events throughout the semester. 
                They will be held by some of the leading business and technology companies 
                across the world, and members will have the opportunity to talk to recruiters 
                and get to know more about what each company has to offer. 
            </p>
            <h3 className={styles.projectsSubHeader}>Committees</h3>
            <div className={styles.projectsDivider}></div>
            <div className={styles.committeesContainer}>
                <div className={styles.committee}>FINANCE</div>
                <div className={styles.committee}>CONSULTING</div>
                <div className={styles.committee}>TECHNOLOGY</div>
                <div className={styles.committee}>ENGINEERING</div>
            </div>
            <div className={styles.commiteeDescContainer}>
                <div className={styles.commiteeContent}>
                    <h2 className={styles.descHeader}>NOBE 2021 STOCK GAME</h2>
                    <div className={styles.descSubHeader}>{'Prizes - \n1st Place : $150 \n2nd Place - $75 \n3rd Place - $50'}</div>
                    <div className={styles.commiteeDescContent}>
                        <div className={styles.descBox}>
                            <div className={styles.descContent}>
                                The NOBE 2021 Stock Market Game is a simulated investment 
                                competition where participants will have the chance to hone 
                                their investment skills and learn more about portfolio management. 
                                We are proud to partner with Tiingo: a next-generation financial platform 
                                that uses both a REST and a Real-Time Data API to provide a realistic simulation 
                                of stock-market data.
                            </div>
                            <img className={styles.descImg} src="../tiingo-logo.svg"/>
                        </div>
                        <img className={styles.commiteeDescImage} src="../tiingo-images.svg"/>
                    </div>
                </div>
                <img className={styles.blCorner} src="../bl-corner.svg"/>
                <img className={styles.trCorner} src="../tr-corner.svg"/>  
            </div>
        </div>
    </div>
    );
}
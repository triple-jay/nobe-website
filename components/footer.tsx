import styles from './footer.module.scss';
import {SocialIcon} from 'react-social-icons';

export default function Footer() {
    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.footer}>
                <div className={styles.footer_text}>
                    Developed by Cornell NOBE &copy; 2021
                </div>
                <div className={styles.icons}>
                    <SocialIcon url="http://www.facebook.com/groups/nobecornell/" bgColor="#000000" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/company/nobe-cornell" bgColor="#000000" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </div>
    );
}
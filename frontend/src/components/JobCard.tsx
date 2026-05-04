import styles from '../modules/JobCard.module.css'
import type { JobCardProps } from '../types/type';

export const JobCard:React.FC<JobCardProps> = ({profile,desc,exp,techs}) => {
    
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <h1>{profile == null ? "No profile data" : profile}</h1>
            </div>
            <div className={styles.desc}>
                <span className={styles.descriptionTitle}>Description</span>: {desc == null? "No Description data" :desc}
            </div>
            <div className={styles.exp}>

                <span className={styles.descriptionTitle}>Years of Experience</span>: {exp == null ? 0 : exp}
            </div>
            <div className={styles.techs}>
                <span className={styles.descriptionTitle}>Skills</span>: {Array.isArray(techs)? techs.join(", ") : "No Skills listed"}
            </div>

        </div>
    )
}
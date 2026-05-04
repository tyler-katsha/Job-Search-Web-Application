import { useNavigate } from "react-router-dom"
import styles from '../modules/Home.module.css'
export const Home = () => {

    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <h1>Get Hired or Hire people for Work!</h1>

            <div className={styles.innercontainer}>
                <button onClick={() => navigate("/hire")} className={styles.btn}>
                Hire Talent
                </button>

                <button onClick={() => navigate("/joblisting")} className={styles.btn}>
                    Get JOB Now!
                </button>
            </div>
            
        </div>
    )
}
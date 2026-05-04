import { useState } from 'react';
import styles from '../modules/HireForm.module.css'
import { ALL_SKILLS} from '../types/type';
import { useNavigate } from 'react-router-dom';
import { MessagePopup } from '../components/MessagePopup';

export const Hire = () => {
    const navigate = useNavigate();
    const [msg,setMsg] = useState<string | null>(null);
    const [popupStatus,setPopupStatus] = useState<number | null>(null);
    const [selectedSkills,setSelectedSkills] = useState<string[]>([]);
    const toggleSkill = (skill:string) => {
        setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev,skill])
    }
    const processHireForm = async (e: React.FormEvent) => {
        e.preventDefault();

        try{
            const formData = new FormData(e.target as HTMLFormElement);

            const xp = Number(formData.get("exp"));
            const pro = formData.get("profile");
            const description = formData.get("desc");

            if(xp === null || pro === null || description === null){
                setMsg("One or more fields is empty");
                setPopupStatus(400);
                return;
            }
            if(xp < 0){
                
                setMsg("Experience can't be negative");
                setPopupStatus(400);
                return;
            }
            const newPost = {
                profile: pro,
                exp: xp,
                desc: description,
                techs:selectedSkills
            };

            console.log(newPost);

            const res = await fetch('http://localhost:8080/api/version1/posts',{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body: JSON.stringify(newPost)
            });
            setPopupStatus(res.status);
        } catch(err){
            console.error(err);
            setMsg("Server error occurred");
            setPopupStatus(500);
        }
        

        
    }

    
    return (
        <div>
            
            {
                popupStatus !== null && (
                    <MessagePopup
                        status={popupStatus}
                        onClose={() => setPopupStatus(null)}
                        msg={msg === null ? "" : msg}
                    />)
            }
            <div className={styles.headerContainer}>
                <button onClick={() => navigate("/")} className={styles.btn}>
                Home Page
                </button>
                <h1 className={styles.dashboard}> Employee Dashboard</h1>
            </div>
            
            <hr/>
            <form className={styles.formContainer} onSubmit={processHireForm}>

                <h1>Create New Post</h1>
                
                <div className={styles.fieldContainer}>
                    <input type='text' 
                    placeholder='Job Profile/Title' 
                    name="profile"
                    className={styles.profile}
                    />

                    <input type='number' 
                    placeholder='Years of Experience' 
                    name="exp"
                    className={styles.exp}
                    />

                    <input type='text' 
                    placeholder='Job Description' 
                    name="desc"
                    className={styles.desc}
                    />
                </div>
                

                <h1>Please mention required skills</h1>

                <div className={styles.skillBoxes}>
                    {
                        ALL_SKILLS.map((skill:string) => (
                            <label key={skill}>
                                <input 
                                    type='checkbox'
                                    checked={selectedSkills.includes(skill)}
                                    onChange={() => toggleSkill(skill)}
                                    className={styles.checkbox}
                                />
                                <span className={styles.skillText}> {skill}</span>
                            </label>
                        ))
                    }
                </div>
            
                <button className={styles.btn} type='submit'> Create Job</button>
            </form>
        </div>
        
    )
}
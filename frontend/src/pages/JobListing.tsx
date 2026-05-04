import { useNavigate } from "react-router-dom"
import styles from '../modules/JobListing.module.css'
import { JobCard } from "../components/JobCard";
import { useState, useEffect } from "react";

export const JobListing = () => {
    const navigate = useNavigate();
    
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<any>(null);
    const [search,setSearch] = useState("");
    const fetchData = async () => {
        try{
            const response = await fetch(`http://localhost:8080/api/version1/posts`)

            const json = await response.json()
            
            setData(json)
        } catch(error){
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }

    const jobSearch = async (s:string) => {
        try{
            const response = await fetch(`http://localhost:8080/api/version1/posts/search/${s}`)

            const json = await response.json()

            setData(json)
        } catch(error){
            console.error(error);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(() => {

        if(search.trim() === ""){
            
            fetchData();
            return;
        }


        const delay = setTimeout(() => {
            jobSearch(search);
        },300)
        
        return () => clearTimeout(delay);
    },[search])
    
    if (loading) return <h1 className={styles.error}>Loading...</h1>
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <button onClick={() => navigate("/")} className={styles.btn}>
                Home Page
                </button>
                <input 
                type='search' 
                placeholder="Search for job: by name, description, skill" 
                className={styles.searchField}
                onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className={styles.JobCardsContainer}>
                {data && 
                    data.map((fragment:any, index:number) => {
                        return (
                            <JobCard 
                        key={index}
                    profile={fragment.profile} 
                    desc={fragment.desc} 
                    exp={fragment.exp} 
                    techs={fragment.techs}
                    />
                        )
                    })
                }
            </div>
        </div>
    )
}
import { useEffect } from 'react';
import styles from '../modules/MessagePopup.module.css'
import type { MessagePopupProps } from '../types/type'

export const MessagePopup:React.FC<MessagePopupProps> = ({status,onClose,msg}) => {

    const isSuccess = status === 200;
    const message = msg?.length ? msg : isSuccess ? 
                    "Job post was added successfully to the website":
                    "Failed to post the Job to the website";
    
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        },3000)

        return () => clearTimeout(timer);
    },[onClose])
    return(
        <div className={isSuccess ? styles.successPopup: styles.errorPopup}>
            {message}
        </div>
    )
}


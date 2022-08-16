import styles from './Message.module.css';
export const Message = (props)=>{
    return(
        <div className={styles.firstStyle}>{props.text}</div>
    );
};
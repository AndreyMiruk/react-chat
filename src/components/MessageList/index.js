import { useState, useEffect } from 'react';
import styles from './MessageList.module.css';

export function MessageList() {
    const [listState, setListState] = useState([]);
    const [message, setMessage] = useState('');
    
    useEffect( () => {botMessage()}
    ,[listState]);

    const botMessage = () => {
        if(listState.length ===0){
            return;
        }
        if(lastIndex(listState).author ==='Я' ){
            console.log(12);
            setTimeout(() => {addMessage('я бот', 'Бот');}, 1500);
        }
    };

    const lastIndex = (array) =>{
        return array[array.length -1];
    };

    const onSubmit =(event) => {
        event.preventDefault();
        addMessage(message, 'Я');
        setMessage('');
    }

    const addMessage = (text, author) => {
        setListState(() => [].concat(listState, {text,author}));
    }


    return(
            <form onSubmit={onSubmit} className = {styles.form}>
                <div className={styles.list}>
                {listState.map((message, index) => <div key={index}>{message.author + ': ' + message.text}</div>)}
                </div>
                <input onChange={(event) => setMessage(event.target.value)} value={message}  type='text' className={styles.input}/>
                <button className={styles.btn}>Отправить</button>
            </form>
    )
}


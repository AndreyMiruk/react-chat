import React from "react";
import styles from "./Message.module.css";

export const Message = (props) => {
    return <div className={styles.primary}>
        {props.text}
    </div>;
};

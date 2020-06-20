import React from 'react';
import styles from './forms.module.css';

export const Input = ({ input, placeholder, meta, morph, ...props }) => {
    const error = meta.error && meta.touched;

    return morph !== 'input' ? (
        <textarea
            {...input}
            placeholder={placeholder}
            className={`${styles.textarea}  ${error && styles.error}`}></textarea>
    ) : (
        <input
            {...input}
            type={props.type}
            placeholder={placeholder}
            className={`${styles.input}  ${error && styles.error}`}></input>
    );
};

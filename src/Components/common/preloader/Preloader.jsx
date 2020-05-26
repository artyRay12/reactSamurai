import preloader from '../../../assets/preloader.svg'
import styles from './preloader.module.css';
import React from 'react';

const Preloader = (props) => {
    return (
        <div className={styles.preloader_wrapper}>
            <img src={preloader} alt="preloader" className="" />
        </div>
    );
};

export default Preloader;

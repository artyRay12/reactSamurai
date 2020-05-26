import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';
import { followAPI, unfollowAPI } from '../../api/api';

let Users = (props) => {
    const photoReplacer = (item) => {
        if (item === null) {
            return 'https://cdn3.iconfinder.com/data/icons/internet-and-web-4/78/internt_web_technology-13-512.png';
        }
        return item;
    };

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pageNumbers = [];
    for (let i = 1; i <= pagesCount; i++) pageNumbers.push(i);

    return (
        <div>
            <div className={styles.paginator}>
                {pageNumbers.map((p) => (
                    <span
                        className={[
                            props.currentPage === p && styles.selected,
                            styles.paginator_item,
                        ].join(' ')}
                        onClick={() => props.changeCurrentPage(p)}>
                        {p}
                    </span>
                ))}
            </div>
            {props.users.map((u) => (
                <div key={u.id} className={styles.user_wrapper}>
                    <div className={styles.avatar_sub_wrap}>
                        <NavLink to={'/profile/' + u.id}>
                            <img
                                className={styles.users_avatar}
                                src={photoReplacer(u.photos.small)}
                                alt=""
                            />
                        </NavLink>

                        {u.followed ? (
                            <button
                                onClick={() => {
                                    unfollowAPI(u.id).then((response) => {
                                        if (response.resultCode === 0) {
                                            props.setUnfollow(u.id);
                                        }
                                    });
                                }}
                                className={styles.sub_button}>
                                unfollow
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    followAPI(u.id).then((response) => {
                                        if (response.resultCode === 0) {
                                            props.setFollow(u.id);
                                        }
                                    });
                                }}
                                className={styles.sub_button}>
                                follow
                            </button>
                        )}
                    </div>
                    <div className={styles.user_status_location_wrap}>
                        <div className={styles.user_status_location_wrap_2}>
                            <div className={styles.name_status_wrap}>
                                <p>{u.name}</p>
                                <p>{u.status}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Users;

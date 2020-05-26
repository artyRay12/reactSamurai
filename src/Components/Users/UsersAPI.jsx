import React from 'react';
import * as Axios from 'axios';
import Users from './Users';

class UsersAPI extends React.Component {
    componentDidMount() {
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        ).then((response) => {
            this.props.setUsers(response.data.items);
        });
    }

    changeCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        Axios.get(
            `https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`,
        ).then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    };

    render = () => (
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changeCurrentPage={this.changeCurrentPage}
            users={this.props.users}
            setFollow={this.props.setFollow}
            setUnfollow={this.props.setUnfollow}
        />
    );
}

export default UsersAPI;

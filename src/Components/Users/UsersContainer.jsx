import React from 'react';
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import * as Axios from 'axios';
import Preloder from '../common/preloader/Preloader.jsx';
import { userApi } from '../../api/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        userApi.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false);
        });
    }

    changeCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        userApi.getUsers(pageNumber).then((data) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    };

    render = () => (
        <>
            {this.props.isFetching ? (
                <Preloder />
            ) : (
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    changeCurrentPage={this.changeCurrentPage}
                    users={this.props.users}
                    setFollow={this.props.follow}
                    setUnfollow={this.props.unfollow}
                    isFetching={this.props.isFetching}
                />
            )}
        </>
    );
}
console.log("123");

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);

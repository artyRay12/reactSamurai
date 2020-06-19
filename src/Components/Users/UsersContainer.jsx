import React from 'react';
import {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunkCreator,
} from '../../redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloder from '../common/preloader/Preloader.jsx';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator( this.props.currentPage, this.props.pageSize);
    }

    changeCurrentPage = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
    setCurrentPage,
    getUsersThunkCreator,
})(UsersContainer);

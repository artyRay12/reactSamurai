import './MyPosts.css';
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from '../../../redux/profileReducer';

import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

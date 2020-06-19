import './MyPosts.css';
import {
    addPostActionCreator,
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
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText))
        }
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

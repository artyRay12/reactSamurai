let store = {
    _state: {
        profilePage: {
            posts: [{ postText: 'Hi bro' }, { postText: 'How are u?' }, { postText: 'Wanna drink some beer?' }],
            newPostText: '',
        },

        dialogsPage: {
            dialogs: [{ userName: 'Pheobeo' }, { userName: 'Joyey' }],
            messages: [{ messageText: 'Privet' }, { messageText: 'Unlucker' }],
        },
    },
    getState(){return this._state},
    _reRenderEntireTree() {},
    addPost(postMessage) {
        let newPost = {
            postText: postMessage,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._reRenderEntireTree(this._state);
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._reRenderEntireTree(this._state);
    },
    subscribe(observer) {
        this._reRenderEntireTree = observer;
    },
};

export default store;

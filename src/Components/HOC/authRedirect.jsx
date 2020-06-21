import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


let mapStateToPropsRedirect = (state) => ({isAuth: state.auth.isAuth});

const authRedirect = (Component) => {
    class CauthRedirect extends React.Component {
        render() {
            if(!this.props.isAuth)
                return <Redirect to="/login" />
            return <Component {...this.props}/>

        }
    }
    let connectToRedirect = connect(mapStateToPropsRedirect)(CauthRedirect);

    return connectToRedirect;
}

export default authRedirect;   
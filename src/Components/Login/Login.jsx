import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import { loginT } from '../../redux/authReducer';

const LoginForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field
                placeholder={'login'}
                name={'login'}
                component={'input'}
                className={styles.input}
            />
            <Field
                placeholder="password"
                type="password"
                name="password"
                component={'input'}
                className={styles.input}
            />
            <div className={styles.checkbox_wrapper}>
                <Field
                    name="rememberMe"
                    component={'input'}
                    type={'checkbox'}
                    className="checkBox"
                />
                Remember me
            </div>

            <button className={styles.button}>Ok!</button>
        </form>
    );
};

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginT(formData);
    };

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    );
};

export default connect(null, { loginT })(Login);

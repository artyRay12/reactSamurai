import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './Login.module.css';
import { connect } from 'react-redux';
import { loginT } from '../../redux/authReducer';
import { input, Input } from '../common/forms/textArea';
import { minLengthCreator, reqiredFields } from '../../redux/utils/validators/validator';

const minLength = minLengthCreator(6);

const LoginForm = (props) => {
    return (
        <form className={styles.form} onSubmit={props.handleSubmit}>
            <Field
                placeholder={'email'}
                name={'email'}
                component={Input}
                className={styles.input}
                validate={[reqiredFields, minLength]}
                morph={'input'}
            />
            <Field
                placeholder={"password"}
                type={"password"}
                name={"password"}
                component={Input}
                className={styles.input}
                validate={[reqiredFields, minLength]}
                morph={'input'}
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
